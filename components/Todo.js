
import React from 'react'

export default function Todo  ({id,title,description,mongoId,complete,deleteTodo}){

  
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
       {id}
    </th>
    <td className="px-6 py-4">
       {title}
    </td>
    <td className="px-6 py-4">
       {description}
    </td>
    <td className="px-6 py-4">
        {complete?"completed":"Pending"}
    </td>
    <td>

    <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-red-500 mr-2"
          onClick={()=>deleteTodo(mongoId)} // Added onClick handler
        >
          Delete
        </button>
  <button
    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-green-500"
  >
    Done
  </button>
</td>

</tr>
  )
}
