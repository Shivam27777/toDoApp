const zod = requre("zod");

const createTodo = zod.object({
    title : zod.string(),
    description : zod.stirng()
})

const updateTodo = zod.object({
    id : zod.stirng(),
})
module.exports = {
    createTodo : createTodo,
    updateTodo : updateTodo
}