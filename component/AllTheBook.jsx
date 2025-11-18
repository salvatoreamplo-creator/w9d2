import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import books from "../books/fantasy.json";

function AllTheBook() {
  return (
    <div style={{ width: '100%' }}>
      {books.map((book, index) => (
        <Card key={index}>
          <Card.Img variant="top" src={book.image || ''} />
          <Card.Body>
            <Card.Title>{book.title || 'Card Title'}</Card.Title>
            <Card.Text>
              {book.description ||
                "Some quick example text to build on the card title and make up the bulk of the card's content."}
            </Card.Text>
            <Button variant="primary">compra ora</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default AllTheBook;
