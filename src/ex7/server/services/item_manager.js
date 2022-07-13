const uuid = require('uuid');
const { Items } = require('../db/models');
const PokemonClient = require('../clients/pokemon_client');

class ItemManager {
    constructor() {
        this.pokemonClient = new PokemonClient();
    }
    
    getItems = async () => await Items.findAll(); 
    
    createItem = async item => {
        await Items.create({"itemName":item,"status":false});
    };

    deleteItem  =async (item) => {
        await Items.destroy({ where:{ id:item }});
    };

    deleteAllItems= async () => {
        await Items.destroy({where:{}});
    };

    changeStatusItem=async (id,status) => {
        await Items.update({status:status},{where:{ id:id }});
        return await this.getItems();
    };

    changeNameItem=async (id,item) => {
        await Items.update({itemName:item},{where:{ id:id }});
    };

    handleItem = async item => {
        if (this._isNumber(item)) { return await this.fetchAndAddPokemon(item); }
        if (this._isList(item)) { return await this.fetchAndAddManyPokemon(item); }
        await this.createItem(item)
    };
    handleItemReturn = async item => {
        await this.handleItem(item);
        return await this.getItems();
    }

    addPokemonItem = async pokemon => {
        await this.createItem(`Catch ${pokemon.name}`);
    };

    fetchAndAddPokemon = async pokemonId => {
        try {
            const pokemon = await this.pokemonClient.getPokemon(pokemonId);
            await this.addPokemonItem(pokemon);
        } catch (error) {
            await this.createItem(`Pokemon with ID ${pokemonId} was not found`);
        }
    };

    fetchAndAddManyPokemon = async inputValue => {
        try {
            const pokemons = await this.pokemonClient.getManyPokemon(inputValue.replace("/ /g", "").split(","));
            pokemons.forEach(this.addPokemonItem);
        } catch (error) {
            await this.createItem(`Failed to fetch pokemon with this input: ${inputValue}`);
        }
    }

    _isNumber = value => !isNaN(Number(value));
    _isList = value => value.split(",").every(this._isNumber);
}
module.exports = new ItemManager()

