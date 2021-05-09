/* eslint-disable no-undef */

import React, {useState, useEffect} from "react";
import {
  IonList,
  IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent,
  IonLabel,
  IonAvatar,
  IonContent,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonPage,
  IonHeader,
  IonImg,
  IonThumbnail,
  IonSpinner
} from "@ionic/react";
import {arrowDown} from "ionicons/icons";
import StarRatings from 'react-star-ratings';
import './BookList.css';
import axios from 'axios';
// description, title, avg rating, author, buy link, category


var books = [{
    description: "A book about a young wizardwieghfiwgiufrliu fiu r2iuweliufghwaeiul fiuqrwgfiugwreliufg liwafgliuwrflr3gfliuq3 glfiuwg erluifgawliufg ylaiw",
    title: "Harry Potter, The Chamber of Secrets",
    authors: ["J.K Rowling", "The dude"],
    buyLink: "https://books.google.ca/books?id=wrOQLV6xB-wC&dq=harry+potter+book&hl=en&sa=X&ved=2ahUKEwjB_o-2gtfuAhXJl54KHYrlAeoQ6AEwBHoECAIQAg",
    mainCategory: "Fantasy and Fiction",
    averageRating: 3.5
},{
    description: "A book about a young wizard",
    title: "Harry Potter, The Chamber of Secrets",
    authors: ["J.K Rowling"],
    buyLink: "https://books.google.ca/books?id=wrOQLV6xB-wC&dq=harry+potter+book&hl=en&sa=X&ved=2ahUKEwjB_o-2gtfuAhXJl54KHYrlAeoQ6AEwBHoECAIQAg",
    mainCategory: "Fantasy and Fiction",
    averageRating: 3.5
},{
    description: "A book about a young wizard",
    title: "Harry Potter, The Chamber of Secrets",
    authors: ["J.K Rowling"],
    buyLink: "https://books.google.ca/books?id=wrOQLV6xB-wC&dq=harry+potter+book&hl=en&sa=X&ved=2ahUKEwjB_o-2gtfuAhXJl54KHYrlAeoQ6AEwBHoECAIQAg",
    mainCategory: "Fantasy and Fiction",
    averageRating: 3.5
}]



function youtube_parser(url){
    let link = url.split("v=");
    if (link[1].includes("&")) {
    return link[1].substring(0, link[1].indexOf("&"));
    }
    else {
    return link[1];
    }
}

const getBooks = async (url) => {
    let id = youtube_parser(url);
    var res = await axios.get(`http://localhost:5000/app/books/?videoId=${id}`);
    console.log(res.data);
    return res.data;
}



const Book = (props) => {
    var book = props.book;
    const [rating, setRating] = useState(5);
    

    useEffect(() => {
        setRating(book.volumeInfo.averageRating);
      }, []);

    const StarRating = () => {
        return (
            <StarRatings className="stars"
                starRatedColor="#671B0A"
                rating = {rating}
                starSpacing = "1px"
                starDimension = "20px"
                />
        )
    }

    return (

        <div>
        <IonCard className="card" onClick={() => window.open(book?.volumeInfo?.canonicalVolumeLink)}>
            <IonThumbnail className="book-icon" >
            <IonImg src={book.volumeInfo?.imageLinks?.thumbnail ? book.volumeInfo?.imageLinks?.thumbnail: "open-book.png"}/>
            </IonThumbnail>
            <IonCardTitle className="card-title" >{book.volumeInfo?.title?.length < 40 ? book.volumeInfo?.title : book.volumeInfo?.title?.slice(0, 34) + "..."}</IonCardTitle>
            {book.volumeInfo.averageRating ? <StarRating></StarRating> : <></>}S
            <IonCardSubtitle className="category">{book?.volumeInfo?.categories?.join(', ')}</IonCardSubtitle>
            <IonCardSubtitle className="authors">{book?.volumeInfo?.authors?.join(', ')}</IonCardSubtitle>
            <IonIcon className="arrow"icon={arrowDown}></IonIcon>
            <IonCardContent className="description">{book?.volumeInfo?.description?.length > 300 ? book?.volumeInfo?.description?.substring(0, 300)+"..." : book?.volumeInfo?.description}</IonCardContent>
        </IonCard>

        </div>
   
    )
}

const BookList = (props) => {

    const [books, setBooks] = useState();
    const videoVerifiers = ["https://www.youtube", "v="];
    const [titleMessage, setTitleMessage] = useState("You are not on a youtube video");

    useEffect(() => {
        if (videoVerifiers.every(word => props.link.includes(word))) {
        const res = getBooks(props.link).then(books => {console.log("here is the response"); setBooks(books);});
        setTitleMessage("Here are some books for your video...");
     }
      }, [props]);
    
    return (
    <div className="page">
    <IonTitle size="large" class="title">{titleMessage}</IonTitle>
    <IonList className="book-list">
    {books?.map((book, index) => {
        return (
            <Book book={book} key={index} />
        )
    })}
    </IonList>
    </div>
    )
}

export default BookList;