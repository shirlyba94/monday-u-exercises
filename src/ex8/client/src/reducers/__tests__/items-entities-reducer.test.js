import itemsEntitiesReducer from "../items-entities-reducer";


test("should return the initial state", () => {
  expect(itemsEntitiesReducer(undefined, { type: undefined })).toEqual({});
}); 

test('itemsEntitiesReducer should add new items todo to the existing todo list', () => {
  expect(itemsEntitiesReducer(undefined, {type: "add_item_success", item:{id: 1, name:'Catch bulbasaur'}})).toEqual(
    {1:{id: 1, name:'Catch bulbasaur'}}
  )
})

test('itemsEntitiesReducer should delete item todo to the todo list', () => {
  expect(itemsEntitiesReducer({1:{id: 1, name:'Catch bulbasaur'},2:{id: 2, name:'Catch venusaur'}}, {type: "remove_item_success", item:{id: 1, name:'Catch bulbasaur'}})).toEqual(
    {2:{id: 2, name:'Catch venusaur'}}
  )
})

test('itemsEntitiesReducer changes status', () => {
  expect(itemsEntitiesReducer({1:{id: 1, name:'Catch bulbasaur',status:false},2:{id: 2, name:'Catch venusaur', status:false}}, {type: "toggle_item_success", itemId: 1})).toEqual(
    {1:{id: 1, name:'Catch bulbasaur',status:true},2:{id: 2, name:'Catch venusaur', status:false}}
  )
})

test('itemsEntitiesReducer fetch item todo list', () => {
  expect(itemsEntitiesReducer({}, {type: "fetch_items_success",items:{1:{id: 1, name:'Catch bulbasaur',status:true},2:{id: 2, name:'Catch venusaur', status:false}}})).toEqual(
    {1:{id: 1, name:'Catch bulbasaur',status:true},2:{id: 2, name:'Catch venusaur', status:false}}
  )
})
