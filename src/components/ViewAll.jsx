import React from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
  return (
    <div>
        <NavBar/>
        <h1><center>VIEW BOOKS</center></h1>
        <br></br>
        <table className="table table-danger table-striped">
  <thead>
    <tr>
      <th scope="col">TITLE</th>
      <th scope="col">AUTHOR</th>
      <th scope="col">PUBLISHED YEAR</th>
      <th scope="col">PRICE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">	Pride and Prejudice</th>
      <td>Jane Austen</td>
      <td>2016</td>
      <td>2000</td>
    </tr>
    <tr>
      <th scope="row">	Pride and Prejudice</th>
      <td>Jane Austen</td>
      <td>2016</td>
      <td>2000</td>
    </tr>
    <tr>
      <th scope="row">	Pride and Prejudice</th>
      <td>Jane Austen</td>
      <td>2016</td>
      <td>2000</td>
    </tr>
    <tr>
      <th scope="row">	Pride and Prejudice</th>
      <td>Jane Austen</td>
      <td>2016</td>
      <td>2000</td>
    </tr>
    <tr>
      <th scope="row">	Pride and Prejudice</th>
      <td>Jane Austen</td>
      <td>2016</td>
      <td>2000</td>
    </tr>
    <tr>
      <th scope="row">	Pride and Prejudice</th>
      <td>Jane Austen</td>
      <td>2016</td>
      <td>2000</td>
    </tr>
    <tr>
      <th scope="row">	Pride and Prejudice</th>
      <td>Jane Austen</td>
      <td>2016</td>
      <td>2000</td>
    </tr>
    <tr>
      <th scope="row">	Pride and Prejudice</th>
      <td>Jane Austen</td>
      <td>2016</td>
      <td>2000</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default ViewAll