# Book Reviews App
Un’app di recensione di libri in cui si possono lasciare reviews pubblici, aiutando gli utenti a scegliere il prossimo libro da leggere.

## Descrizione
L'app Book Reviews App è un sistema di gestione dei libri che permette agli utenti di lasciare recensioni pubbliche. Le recensioni possono essere lette e valutate dagli altri utenti, aiutando a creare una comunità di lettori.

## Caratteristiche chiave
Lasciare commenti pubblici sui libri
Gestione dei libri con sistema di votazione

## Database
- Table: `books`
- Table: `reviews`

## Books Table
- id
- title
- author
- abstract
- pages
- year

## Reviews Table
- id
- book_id
- username
- date
- review
- vote