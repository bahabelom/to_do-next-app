import { NextResponse } from 'next/server';
import { ConnectDB } from '../../lib/config/db';
import TodoModel from '../../lib/Models/TodoModel';
const LoadDB = async () => {
    await ConnectDB();
}
LoadDB();
// Handle GET requests to the /api route

export async function GET(request) {
    const todos = await TodoModel.find({});
    return NextResponse.json({ todos: todos });
}

export  async function POST(request) {
    try {
     
        const { title, description } = await request.json();
        // Validate data (replace with your validation logic)
        if (!title || !description) {
           
            return NextResponse.json({ message: 'Please provide both title and description' });
        }
        const newTodo=  await TodoModel.create({
            title,
            description
        })
        return NextResponse.json({ message: 'Todo created successfully', todo: newTodo });
    } catch (error) {
        return NextResponse.json({ message: 'Error creating todo' });
    }
}




// Handle DELETE requests to delete a todo by ID
export async function DELETE(request) {
     

  try {
    const { mongoId } =  await request.json();

   

    console.log("id from API ",mongoId);

    
    // Check if the ID is valid
    if (!id) {
        return NextResponse.error(new Error('ID parameter is missing'));
    }

    // Delete the todo item from the database
    const deletedTodo = await TodoModel.findByIdAndDelete(mongoId);

    if (!deletedTodo) {
        return NextResponse.error(new Error('Todo not found'));
    }

    return NextResponse.json({ message: 'Todo deleted successfully' });
} catch (error) {
    return NextResponse.error(error);
}
}