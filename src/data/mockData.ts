import { User, Book, BorrowedBook } from "@/types";

export const users: User[] = [
  {
    id: "1",
    username: "gasim",
    email: "gasim@gmail.com",
    password: "gasim123", // Would be hashed in real application
    role: "student",
    name: "Gasim"
  },
  {
    id: "2",
    username: "admin1",
    email: "sujai_admin@olms.in",
    password: "sujai123", // Would be hashed in real application
    role: "admin",
    name: "Sujai Shanmugam"
  },
  {
    id: "3",
    username: "abbas",
    email: "abbas@gmail.com",
    password: "abbas123", // Would be hashed in real application
    role: "student",
    name: "Abbas"
  },
  {
    id: "4",
    username: "davyd",
    email: "davyd@gmail.com",
    password: "davyd123", // Would be hashed in real application
    role: "student",
    name: "Davyd"
  },
  {
    id: "5",
    username: "rufi",
    email: "rufi@gmail.com",
    password: "rufi123", // Would be hashed in real application
    role: "student",
    name: "Rufi"
  },
  {
    id: "6",
    username: "janis.amolins",
    email: "Janis.Amolins@olms.in",
    password: "janis123", // Would be hashed in real application
    role: "admin",
    name: "Janis Amolins"
  },
  {
    id: "7",
    username: "janis.student",
    email: "janis_student@gmail.com",
    password: "janis123", // Would be hashed in real application
    role: "student",
    name: "Janis Student"
  }
];

export const books: Book[] = [
  {
    id: "1",
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    publisher: "Bloomsbury",
    isbn: "978-0-7475-3269-9",
    coverImage: "/images/harry-potter.png",
    available: true,
  },
  {
    id: "2",
    title: "The Origin of Species",
    author: "Charles Darwin",
    publisher: "John Murray",
    isbn: "978-0-6848-3728-0",
    coverImage: "/images/species.png",
    available: true,
  },
  {
    id: "3",
    title: "Last Words",
    author: "George Carlin",
    publisher: "Free Press",
    isbn: "978-1-4391-7295-7",
    coverImage: "/images/last-words.png",
    available: true,
  },
  {
    id: "4",
    title: "The Bright Edge of the World",
    author: "Eowyn Ivey",
    publisher: "Little, Brown and Company",
    isbn: "978-0-316-24285-1",
    coverImage: "/images/The-Bright-Edge-of-the-World.png",
    available: true,
  },
  {
    id: "5",
    title: "The Shining",
    author: "Stephen King",
    publisher: "Doubleday",
    isbn: "978-0-385-12167-5",
    coverImage: "/images/the-shining.png",
    available: true,
  },
  {
    id: "6",
    title: "It",
    author: "Stephen King",
    publisher: "Viking",
    isbn: "978-0-670-81302-5",
    coverImage: "/images/it.png",
    available: true,
  },
  {
    id: "7",
    title: "The Stand",
    author: "Stephen King",
    publisher: "Doubleday",
    isbn: "978-0-385-12168-2",
    coverImage: "/images/the-stand.png",
    available: true,
  },
  {
    id: "8",
    title: "Pet Sematary",
    author: "Stephen King",
    publisher: "Doubleday",
    isbn: "978-0-385-12874-2",
    coverImage: "/images/pet-sematary.png",
    available: true,
  },
  {
    id: "9",
    title: "Carrie",
    author: "Stephen King",
    publisher: "Doubleday",
    isbn: "978-0-385-08695-0",
    coverImage: "/images/carrie.png",
    available: true,
  },
  {
    id: "10",
    title: "Misery",
    author: "Stephen King",
    publisher: "Viking",
    isbn: "978-0-670-81364-3",
    coverImage: "/images/misery.png",
    available: true,
  },
  {
    id: "11",
    title: "The Green Mile",
    author: "Stephen King",
    publisher: "Signet Books",
    isbn: "978-0-451-19336-4",
    coverImage: "/images/the-green-mile.png",
    available: true,
  },
  {
    id: "12",
    title: "11/22/63",
    author: "Stephen King",
    publisher: "Scribner",
    isbn: "978-1-4516-2728-2",
    coverImage: "/images/112263.png",
    available: true,
  },
];

export const borrowedBooks: BorrowedBook[] = [
  // Remove initial borrowed books to start with all available when local storage is clear
];
