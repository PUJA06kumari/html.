const mainDiv=document.getElementById('books')
const books=[
    {
      "name": "Parasite",
      "oscar": 2019,
      "released_year": 2019,
      "poster": "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "R",
      "duration": "132 min",
      "genre": "Comedy, Drama, Thriller",
      "summary": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
      "directors": [
        "Bong Joon Ho"
      ],
      "stars": [
        "Kang-ho Song",
        "Sun-kyun Lee",
        "Yeo-jeong Jo",
        "Woo-sik Choi"
      ]
    },
    {
      "name": "Green Book",
      "oscar": 2018,
      "released_year": 2018,
      "poster": "https://m.media-amazon.com/images/M/MV5BYzIzYmJlYTYtNGNiYy00N2EwLTk4ZjItMGYyZTJiOTVkM2RlXkEyXkFqcGdeQXVyODY1NDk1NjE@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "PG-13",
      "duration": "130 min",
      "genre": "Biography, Comedy, Drama",
      "summary": "A working-class Italian-American bouncer becomes the driver of an African-American classical pianist on a tour of venues through the 1960s American South.",
      "directors": [
        "Peter Farrelly"
      ],
      "stars": [
        "Viggo Mortensen",
        "Mahershala Ali",
        "Linda Cardellini",
        "Sebastian Maniscalco"
      ]
    },
    {
      "name": "The Shape of Water",
      "oscar": 2017,
      "released_year": 2017,
      "poster": "https://m.media-amazon.com/images/M/MV5BNGNiNWQ5M2MtNGI0OC00MDA2LWI5NzEtMmZiYjVjMDEyOWYzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "R",
      "duration": "123 min",
      "genre": "Adventure, Drama, Fantasy",
      "summary": "At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity.",
      "directors": [
        "Guillermo del Toro"
      ],
      "stars": [
        "Sally Hawkins",
        "Octavia Spencer",
        "Michael Shannon",
        "Doug Jones"
      ]
    },
    {
      "name": "Moonlight",
      "oscar": 2016,
      "released_year": 2016,
      "poster": "https://m.media-amazon.com/images/M/MV5BNzQxNTIyODAxMV5BMl5BanBnXkFtZTgwNzQyMDA3OTE@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "R",
      "duration": "111 min",
      "genre": "Drama",
      "summary": "A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.",
      "directors": [
        "Barry Jenkins"
      ],
      "stars": [
        "Mahershala Ali",
        "Naomie Harris",
        "Trevante Rhodes",
        "Alex R. Hibbert"
      ]
    },
    {
      "name": "Spotlight",
      "oscar": 2015,
      "released_year": 2015,
      "poster": "https://m.media-amazon.com/images/M/MV5BMjIyOTM5OTIzNV5BMl5BanBnXkFtZTgwMDkzODE2NjE@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "R",
      "duration": "129 min",
      "genre": "Biography, Crime, Drama",
      "summary": "The true story of how the Boston Globe uncovered the massive scandal of child molestation and cover-up within the local Catholic Archdiocese, shaking the entire Catholic Church to its core.",
      "directors": [
        "Tom McCarthy"
      ],
      "stars": [
        "Mark Ruffalo",
        "Michael Keaton",
        "Rachel McAdams",
        "Liev Schreiber"
      ]
    },
    {
      "name": "Birdman or (The Unexpected Virtue of Ignorance)",
      "oscar": 2014,
      "released_year": 2014,
      "poster": "https://m.media-amazon.com/images/M/MV5BODAzNDMxMzAxOV5BMl5BanBnXkFtZTgwMDMxMjA4MjE@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "R",
      "duration": "119 min",
      "genre": "Comedy, Drama",
      "summary": "A washed-up superhero actor attempts to revive his fading career by writing, directing, and starring in a Broadway production.",
      "directors": [
        "Alejandro G. Iñárritu"
      ],
      "stars": [
        "Michael Keaton",
        "Zach Galifianakis",
        "Edward Norton",
        "Andrea Riseborough"
      ]
    },
    {
      "name": "12 Years a Slave",
      "oscar": 2013,
      "released_year": 2013,
      "poster": "https://m.media-amazon.com/images/M/MV5BMjExMTEzODkyN15BMl5BanBnXkFtZTcwNTU4NTc4OQ@@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "R",
      "duration": "134 min",
      "genre": "Biography, Drama, History",
      "summary": "In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.",
      "directors": [
        "Steve McQueen"
      ],
      "stars": [
        "Chiwetel Ejiofor",
        "Michael Kenneth Williams",
        "Michael Fassbender",
        "Brad Pitt"
      ]
    },
    {
      "name": "Argo",
      "oscar": 2012,
      "released_year": 2012,
      "poster": "https://m.media-amazon.com/images/M/MV5BNzljNjY3MDYtYzc0Ni00YjU0LWIyNDUtNTE0ZDRiMGExMjZlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "R",
      "duration": "120 min",
      "genre": "Biography, Drama, Thriller",
      "summary": "Acting under the cover of a Hollywood producer scouting a location for a science fiction film, a CIA agent launches a dangerous operation to rescue six Americans in Tehran during the U.S. hostage crisis in Iran in 1979.",
      "directors": [
        "Ben Affleck"
      ],
      "stars": [
        "Ben Affleck",
        "Bryan Cranston",
        "John Goodman",
        "Alan Arkin"
      ]
    },
    {
      "name": "The Artist",
      "oscar": 2011,
      "released_year": 2011,
      "poster": "https://m.media-amazon.com/images/M/MV5BMDUyZWU5N2UtOWFlMy00MTI0LTk0ZDYtMzFhNjljODBhZDA5XkEyXkFqcGdeQXVyNzA4ODc3ODU@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "PG-13",
      "duration": "100 min",
      "genre": "Comedy, Drama, Romance",
      "summary": "An egomaniacal film star develops a relationship with a young dancer against the backdrop of Hollywood's silent era.",
      "directors": [
        "Michel Hazanavicius"
      ],
      "stars": [
        "Jean Dujardin",
        "Bérénice Bejo",
        "John Goodman",
        "James Cromwell"
      ]
    },
    {
      "name": "The King's Speech",
      "oscar": 2010,
      "released_year": 2010,
      "poster": "https://m.media-amazon.com/images/M/MV5BMzU5MjEwMTg2Nl5BMl5BanBnXkFtZTcwNzM3MTYxNA@@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "R",
      "duration": "118 min",
      "genre": "Biography, Drama, History",
      "summary": "The story of King George VI, his impromptu ascension to the throne of the British Empire in 1936, and the speech therapist who helped the unsure monarch overcome his stammer.",
      "directors": [
        "Tom Hooper"
      ],
      "stars": [
        "Colin Firth",
        "Geoffrey Rush",
        "Helena Bonham Carter",
        "Derek Jacobi"
      ]
    },
    {
      "name": "Slumdog Millionaire",
      "oscar": 2009,
      "released_year": 2008,
      "poster": "https://m.media-amazon.com/images/M/MV5BZmNjZWI3NzktYWI1Mi00OTAyLWJkNTYtMzUwYTFlZDA0Y2UwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "R",
      "duration": "120 min",
      "genre": "Drama, Romance",
      "summary": "A Mumbai teenager reflects on his life after being accused of cheating on the Indian version of \"Who Wants to be a Millionaire?\".",
      "directors": [
        "Danny Boyle",
        "Loveleen Tandan"
      ],
      "stars": [
        "Dev Patel",
        "Freida Pinto",
        "Saurabh Shukla",
        "Anil Kapoor"
      ]
    },
    {
      "name": "The Hurt Locker",
      "oscar": 2008,
      "released_year": 2008,
      "poster": "https://m.media-amazon.com/images/M/MV5BYWYxZjU2MmQtMmMzYi00ZWUwLTg2ZWQtMDExZTVlYjM3ZWM1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "R",
      "duration": "131 min",
      "genre": "Drama, Thriller, War",
      "summary": "During the Iraq War, a Sergeant recently assigned to an army bomb squad is put at odds with his squad mates due to his maverick way of handling his work.",
      "directors": [
        "Kathryn Bigelow"
      ],
      "stars": [
        "Jeremy Renner",
        "Anthony Mackie",
        "Brian Geraghty",
        "Guy Pearce"
      ]
    },
    {
      "name": "No Country for Old Men",
      "oscar": 2007,
      "released_year": 2007,
      "poster": "https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "R",
      "duration": "122 min",
      "genre": "Crime, Drama, Thriller",
      "summary": "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
      "directors": [
        "Ethan Coen",
        "Joel Coen"
      ],
      "stars": [
        "Tommy Lee Jones",
        "Javier Bardem",
        "Josh Brolin",
        "Woody Harrelson"
      ]
    },
    {
      "name": "The Departed",
      "oscar": 2006,
      "released_year": 2006,
      "poster": "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "R",
      "duration": "151 min",
      "genre": "Crime, Drama, Thriller",
      "summary": "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
      "directors": [
        "Martin Scorsese"
      ],
      "stars": [
        "Leonardo DiCaprio",
        "Matt Damon",
        "Jack Nicholson",
        "Mark Wahlberg"
      ]
    },
    {
      "name": "Million Dollar Baby",
      "oscar": 2005,
      "released_year": 2004,
      "poster": "https://m.media-amazon.com/images/M/MV5BMTkxNzA1NDQxOV5BMl5BanBnXkFtZTcwNTkyMTIzMw@@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "PG-13",
      "duration": "132 min",
      "genre": "Drama, Sport",
      "summary": "A determined woman works with a hardened boxing trainer to become a professional.",
      "directors": [
        "Clint Eastwood"
      ],
      "stars": [
        "Hilary Swank",
        "Clint Eastwood",
        "Morgan Freeman",
        "Jay Baruchel"
      ]
    },
    {
      "name": "Crash",
      "oscar": 2004,
      "released_year": 2004,
      "poster": "https://m.media-amazon.com/images/M/MV5BOTk1OTA1MjIyNV5BMl5BanBnXkFtZTcwODQxMTkyMQ@@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "R",
      "duration": "112 min",
      "genre": "Crime, Drama, Thriller",
      "summary": "Los Angeles citizens with vastly separate lives collide in interweaving stories of race, loss and redemption.",
      "directors": [
        "Paul Haggis"
      ],
      "stars": [
        "Don Cheadle",
        "Sandra Bullock",
        "Thandie Newton",
        "Karina Arroyave"
      ]
    },
    {
      "name": "The Lord of the Rings: The Return of the King",
      "oscar": 2003,
      "released_year": 2003,
      "poster": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "PG-13",
      "duration": "201 min",
      "genre": "Adventure, Drama, Fantasy",
      "summary": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      "directors": [
        "Peter Jackson"
      ],
      "stars": [
        "Elijah Wood",
        "Viggo Mortensen",
        "Ian McKellen",
        "Orlando Bloom"
      ]
    },
    {
      "name": "Chicago",
      "oscar": 2002,
      "released_year": 2002,
      "poster": "https://m.media-amazon.com/images/M/MV5BN2E3NDU1ZTktNzZjNy00MWU3LWI4YmMtMjdjNTIzMDU0MDdiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "PG-13",
      "duration": "113 min",
      "genre": "Comedy, Crime, Musical",
      "summary": "Two death-row murderesses develop a fierce rivalry while competing for publicity, celebrity, and a sleazy lawyer's attention.",
      "directors": [
        "Rob Marshall"
      ],
      "stars": [
        "Renée Zellweger",
        "Catherine Zeta-Jones",
        "Richard Gere",
        "Taye Diggs"
      ]
    },
    {
      "name": "A Beautiful Mind",
      "oscar": 2001,
      "released_year": 2001,
      "poster": "https://m.media-amazon.com/images/M/MV5BMzcwYWFkYzktZjAzNC00OGY1LWI4YTgtNzc5MzVjMDVmNjY0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "PG-13",
      "duration": "135 min",
      "genre": "Biography, Drama",
      "summary": "After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.",
      "directors": [
        "Ron Howard"
      ],
      "stars": [
        "Russell Crowe",
        "Ed Harris",
        "Jennifer Connelly",
        "Christopher Plummer"
      ]
    },
    {
      "name": "Gladiator",
      "oscar": 2000,
      "released_year": 2000,
      "poster": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "R",
      "duration": "155 min",
      "genre": "Action, Adventure, Drama",
      "summary": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
      "directors": [
        "Ridley Scott"
      ],
      "stars": [
        "Russell Crowe",
        "Joaquin Phoenix",
        "Connie Nielsen",
        "Oliver Reed"
      ]
    },
    {
      "name": "American Beauty",
      "oscar": 1999,
      "released_year": 1999,
      "poster": "https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "R",
      "duration": "122 min",
      "genre": "Drama",
      "summary": "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.",
      "directors": [
        "Sam Mendes"
      ],
      "stars": [
        "Kevin Spacey",
        "Annette Bening",
        "Thora Birch",
        "Wes Bentley"
      ]
    },
    {
      "name": "Shakespeare in Love",
      "oscar": 1998,
      "released_year": 1998,
      "poster": "https://m.media-amazon.com/images/M/MV5BM2ZkNjM5MjEtNTBlMC00OTI5LTgyYmEtZDljMzNmNzhiNzY0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "R",
      "duration": "123 min",
      "genre": "Comedy, Drama, History",
      "summary": "The world's greatest ever playwright, William Shakespeare, is young, out of ideas and short of cash, but meets his ideal woman and is inspired to write one of his most famous plays.",
      "directors": [
        "John Madden"
      ],
      "stars": [
        "Gwyneth Paltrow",
        "Joseph Fiennes",
        "Geoffrey Rush",
        "Tom Wilkinson"
      ]
    },
    {
      "name": "Titanic",
      "oscar": 1997,
      "released_year": 1997,
      "poster": "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "PG-13",
      "duration": "194 min",
      "genre": "Drama, Romance",
      "summary": "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
      "directors": [
        "James Cameron"
      ],
      "stars": [
        "Leonardo DiCaprio",
        "Kate Winslet",
        "Billy Zane",
        "Kathy Bates"
      ]
    },
    {
      "name": "The English Patient",
      "oscar": 1996,
      "released_year": 1996,
      "poster": "https://m.media-amazon.com/images/M/MV5BOTkxZTdkNTQtM2QwOS00NzRlLWEyMGItYTcxOTE4NTgyNGVhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "R",
      "duration": "162 min",
      "genre": "Drama, Romance, War",
      "summary": "At the close of World War II, a young nurse tends to a badly-burned plane crash victim. His past is shown in flashbacks, revealing an involvement in a fateful love affair.",
      "directors": [
        "Anthony Minghella"
      ],
      "stars": [
        "Ralph Fiennes",
        "Juliette Binoche",
        "Willem Dafoe",
        "Kristin Scott Thomas"
      ]
    },
    {
      "name": "Braveheart",
      "oscar": 1995,
      "released_year": 1995,
      "poster": "https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "R",
      "duration": "178 min",
      "genre": "Biography, Drama, History",
      "summary": "When his secret bride is executed for assaulting an English soldier who tried to rape her, William Wallace begins a revolt against King Edward I of England.",
      "directors": [
        "Mel Gibson"
      ],
      "stars": [
        "Mel Gibson",
        "Sophie Marceau",
        "Patrick McGoohan",
        "Angus Macfadyen"
      ]
    },
    {
      "name": "Forrest Gump",
      "oscar": 1994,
      "released_year": 1994,
      "poster": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "PG-13",
      "duration": "142 min",
      "genre": "Drama, Romance",
      "summary": "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
      "directors": [
        "Robert Zemeckis"
      ],
      "stars": [
        "Tom Hanks",
        "Robin Wright",
        "Gary Sinise",
        "Sally Field"
      ]
    },
    {
      "name": "Schindler's List",
      "oscar": 1993,
      "released_year": 1993,
      "poster": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "R",
      "duration": "195 min",
      "genre": "Biography, Drama, History",
      "summary": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      "directors": [
        "Steven Spielberg"
      ],
      "stars": [
        "Liam Neeson",
        "Ralph Fiennes",
        "Ben Kingsley",
        "Caroline Goodall"
      ]
    },
    {
      "name": "Unforgiven",
      "oscar": 1992,
      "released_year": 1992,
      "poster": "https://m.media-amazon.com/images/M/MV5BODM3YWY4NmQtN2Y3Ni00OTg0LWFhZGQtZWE3ZWY4MTJlOWU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "R",
      "duration": "130 min",
      "genre": "Drama, Western",
      "summary": "Retired Old West gunslinger William Munny (Clint Eastwood) reluctantly takes on one last job, with the help of his old partner Ned Logan (Morgan Freeman) and a young man, The \"Schofield Kid\" (Jaimz Woolvett).",
      "directors": [
        "Clint Eastwood"
      ],
      "stars": [
        "Clint Eastwood",
        "Gene Hackman",
        "Morgan Freeman",
        "Richard Harris"
      ]
    },
    {
      "name": "The Silence of the Lambs",
      "oscar": 1991,
      "released_year": 1991,
      "poster": "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "R",
      "duration": "118 min",
      "genre": "Crime, Drama, Thriller",
      "summary": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
      "directors": [
        "Jonathan Demme"
      ],
      "stars": [
        "Jodie Foster",
        "Anthony Hopkins",
        "Lawrence A. Bonney",
        "Kasi Lemmons"
      ]
    },
    {
      "name": "Dances with Wolves",
      "oscar": 1990,
      "released_year": 1990,
      "poster": "https://m.media-amazon.com/images/M/MV5BMTY3OTI5NDczN15BMl5BanBnXkFtZTcwNDA0NDY3Mw@@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "PG-13",
      "duration": "181 min",
      "genre": "Adventure, Drama, Western",
      "summary": "Lieutenant John Dunbar, assigned to a remote western Civil War outpost, befriends wolves and Indians, making him an intolerable aberration in the military.",
      "directors": [
        "Kevin Costner"
      ],
      "stars": [
        "Kevin Costner",
        "Mary McDonnell",
        "Graham Greene",
        "Rodney A. Grant"
      ]
    },
    {
      "name": "Driving Miss Daisy",
      "oscar": 1989,
      "released_year": 1989,
      "poster": "https://m.media-amazon.com/images/M/MV5BMDE2ZTY3YmUtZTFhYy00ZmU2LWI2NjktY2NmZGZlYjg5OGMwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "PG",
      "duration": "99 min",
      "genre": "Drama",
      "summary": "An old Jewish woman and her African-American chauffeur in the American South have a relationship that grows and improves over the years.",
      "directors": [
        "Bruce Beresford"
      ],
      "stars": [
        "Morgan Freeman",
        "Jessica Tandy",
        "Dan Aykroyd",
        "Patti LuPone"
      ]
    },
    {
      "name": "Rain Man",
      "oscar": 1988,
      "released_year": 1988,
      "poster": "https://m.media-amazon.com/images/M/MV5BMzVjNzI4NzYtMjE4NS00M2IzLWFkOWMtOTYwMWUzN2ZlNGVjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "R",
      "duration": "133 min",
      "genre": "Drama",
      "summary": "Selfish yuppie Charlie Babbitt's father left a fortune to his savant brother Raymond and a pittance to Charlie; they travel cross-country.",
      "directors": [
        "Barry Levinson"
      ],
      "stars": [
        "Dustin Hoffman",
        "Tom Cruise",
        "Valeria Golino",
        "Gerald R. Molen"
      ]
    },
    {
      "name": "The Last Emperor",
      "oscar": 1987,
      "released_year": 1987,
      "poster": "https://m.media-amazon.com/images/M/MV5BZTk0NDU4YmItOTk0ZS00ODc2LTkwNGItNWI5MDJkNTJiYWMxXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "PG-13",
      "duration": "163 min",
      "genre": "Biography, Drama, History",
      "summary": "The story of the final Emperor of China.",
      "directors": [
        "Bernardo Bertolucci"
      ],
      "stars": [
        "John Lone",
        "Joan Chen",
        "Peter O'Toole",
        "Ruocheng Ying"
      ]
    },
    {
      "name": "Platoon",
      "oscar": 1986,
      "released_year": 1986,
      "poster": "https://m.media-amazon.com/images/M/MV5BMzRjZjdlMjQtODVkYS00N2YzLWJlYWYtMGVlN2E5MWEwMWQzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "R",
      "duration": "120 min",
      "genre": "Drama, War",
      "summary": "A young soldier in Vietnam faces a moral crisis when confronted with the horrors of war and the duality of man.",
      "directors": [
        "Oliver Stone"
      ],
      "stars": [
        "Charlie Sheen",
        "Tom Berenger",
        "Willem Dafoe",
        "Keith David"
      ]
    },
    {
      "name": "Out of Africa",
      "oscar": 1985,
      "released_year": 1985,
      "poster": "https://m.media-amazon.com/images/M/MV5BMTc5Y2NiZWQtZGY4YS00NDI4LThhM2ItMDdhYzFlNzY1NmM0XkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "PG",
      "duration": "161 min",
      "genre": "Biography, Drama, Romance",
      "summary": "In 20th-century colonial Kenya, a Danish baroness/plantation owner has a passionate love affair with a free-spirited big-game hunter.",
      "directors": [
        "Sydney Pollack"
      ],
      "stars": [
        "Meryl Streep",
        "Robert Redford",
        "Klaus Maria Brandauer",
        "Michael Kitchen"
      ]
    },
    {
      "name": "Amadeus",
      "oscar": 1984,
      "released_year": 1984,
      "poster": "https://m.media-amazon.com/images/M/MV5BNWJlNzUzNGMtYTAwMS00ZjI2LWFmNWQtODcxNWUxODA5YmU1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "R",
      "duration": "160 min",
      "genre": "Biography, Drama, History",
      "summary": "The life, success and troubles of Wolfgang Amadeus Mozart, as told by Antonio Salieri, the contemporaneous composer who was insanely jealous of Mozart's talent and claimed to have murdered him.",
      "directors": [
        "Milos Forman"
      ],
      "stars": [
        "F. Murray Abraham",
        "Tom Hulce",
        "Elizabeth Berridge",
        "Roy Dotrice"
      ]
    },
    {
      "name": "Terms of Endearment",
      "oscar": 1983,
      "released_year": 1983,
      "poster": "https://m.media-amazon.com/images/M/MV5BMTk0ODM4NDk0MF5BMl5BanBnXkFtZTgwMTEzMDUxMDE@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "PG",
      "duration": "132 min",
      "genre": "Comedy, Drama",
      "summary": "Follows hard-to-please Aurora looking for love, and her daughter's family problems.",
      "directors": [
        "James L. Brooks"
      ],
      "stars": [
        "Shirley MacLaine",
        "Debra Winger",
        "Jack Nicholson",
        "Danny DeVito"
      ]
    },
    {
      "name": "Gandhi",
      "oscar": 1982,
      "released_year": 1982,
      "poster": "https://m.media-amazon.com/images/M/MV5BMzJiZDRmOWUtYjE2MS00Mjc1LTg1ZDYtNTQxYWJkZTg1OTM4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "PG",
      "duration": "191 min",
      "genre": "Biography, Drama, History",
      "summary": "The life of the lawyer who became the famed leader of the Indian revolts against the British rule through his philosophy of nonviolent protest.",
      "directors": [
        "Richard Attenborough"
      ],
      "stars": [
        "Ben Kingsley",
        "John Gielgud",
        "Rohini Hattangadi",
        "Roshan Seth"
      ]
    },
    {
      "name": "Chariots of Fire",
      "oscar": 1981,
      "released_year": 1981,
      "poster": "https://m.media-amazon.com/images/M/MV5BZjNlNDFmM2ItMDE0Zi00MWNiLTljOWQtZGQ1YTQ2ZWUzZDU2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "PG",
      "duration": "125 min",
      "genre": "Biography, Drama, Sport",
      "summary": "Two British track athletes, one a determined Jew, and the other a devout Christian, compete in the 1924 Olympics.",
      "directors": [
        "Hugh Hudson"
      ],
      "stars": [
        "Ben Cross",
        "Ian Charleson",
        "Nicholas Farrell",
        "Nigel Havers"
      ]
    },
    {
      "name": "Ordinary People",
      "oscar": 1980,
      "released_year": 1980,
      "poster": "https://m.media-amazon.com/images/M/MV5BNWU3MDFkYWQtMWQ5YS00YTcwLThmNDItODY4OWE2ZTdhZmIwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "R",
      "duration": "124 min",
      "genre": "Drama",
      "summary": "The accidental death of the older son of an affluent family deeply strains the relationships among the bitter mother, the good-natured father, and the guilt-ridden younger son.",
      "directors": [
        "Robert Redford"
      ],
      "stars": [
        "Donald Sutherland",
        "Mary Tyler Moore",
        "Judd Hirsch",
        "Timothy Hutton"
      ]
    },
    {
      "name": "Kramer vs. Kramer",
      "oscar": 1979,
      "released_year": 1979,
      "poster": "https://m.media-amazon.com/images/M/MV5BNDM3YjNlYmMtOGY3NS00MmRjLWIyY2UtNDA0MWM3OTNlZTY2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "PG",
      "duration": "105 min",
      "genre": "Drama",
      "summary": "Ted Kramer's wife leaves him, allowing for a lost bond to be rediscovered between Ted and his son, Billy. But a heated custody battle ensues over the divorced couple's son, deepening the wounds left by the separation.",
      "directors": [
        "Robert Benton"
      ],
      "stars": [
        "Dustin Hoffman",
        "Meryl Streep",
        "Jane Alexander",
        "Justin Henry"
      ]
    },
    {
      "name": "The Deer Hunter",
      "oscar": 1978,
      "released_year": 1978,
      "poster": "https://m.media-amazon.com/images/M/MV5BNDhmNTA0ZDMtYjhkNS00NzEzLWIzYTItOGNkMTVmYjE2YmI3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "R",
      "duration": "183 min",
      "genre": "Drama, War",
      "summary": "An in-depth examination of the ways in which the U.S. Vietnam War impacts and disrupts the lives of people in a small industrial town in Pennsylvania.",
      "directors": [
        "Michael Cimino"
      ],
      "stars": [
        "Robert De Niro",
        "Christopher Walken",
        "John Cazale",
        "John Savage"
      ]
    },
    {
      "name": "Annie Hall",
      "oscar": 1977,
      "released_year": 1977,
      "poster": "https://m.media-amazon.com/images/M/MV5BZDg1OGQ4YzgtM2Y2NS00NjA3LWFjYTctMDRlMDI3NWE1OTUyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "PG",
      "duration": "93 min",
      "genre": "Comedy, Romance",
      "summary": "Neurotic New York comedian Alvy Singer falls in love with the ditzy Annie Hall.",
      "directors": [
        "Woody Allen"
      ],
      "stars": [
        "Woody Allen",
        "Diane Keaton",
        "Tony Roberts",
        "Carol Kane"
      ]
    },
    {
      "name": "Rocky",
      "oscar": 1976,
      "released_year": 1976,
      "poster": "https://m.media-amazon.com/images/M/MV5BMTY5MDMzODUyOF5BMl5BanBnXkFtZTcwMTQ3NTMyNA@@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "PG",
      "duration": "120 min",
      "genre": "Drama, Sport",
      "summary": "A small-time boxer gets a supremely rare chance to fight a heavy-weight champion in a bout in which he strives to go the distance for his self-respect.",
      "directors": [
        "John G. Avildsen"
      ],
      "stars": [
        "Sylvester Stallone",
        "Talia Shire",
        "Burt Young",
        "Carl Weathers"
      ]
    },
    {
      "name": "One Flew Over the Cuckoo's Nest",
      "oscar": 1975,
      "released_year": 1975,
      "poster": "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "R",
      "duration": "133 min",
      "genre": "Drama",
      "summary": "A criminal pleads insanity and is admitted to a mental institution, where he rebels against the oppressive nurse and rallies up the scared patients.",
      "directors": [
        "Milos Forman"
      ],
      "stars": [
        "Jack Nicholson",
        "Louise Fletcher",
        "Will Sampson",
        "Michael Berryman"
      ]
    },
    {
      "name": "The Godfather: Part II",
      "oscar": 1974,
      "released_year": 1974,
      "poster": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "R",
      "duration": "202 min",
      "genre": "Crime, Drama",
      "summary": "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
      "directors": [
        "Francis Ford Coppola"
      ],
      "stars": [
        "Al Pacino",
        "Robert De Niro",
        "Robert Duvall",
        "Diane Keaton"
      ]
    },
    {
      "name": "The Sting",
      "oscar": 1973,
      "released_year": 1973,
      "poster": "https://m.media-amazon.com/images/M/MV5BNGU3NjQ4YTMtZGJjOS00YTQ3LThmNmItMTI5MDE2ODI3NzY3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "PG",
      "duration": "129 min",
      "genre": "Comedy, Crime, Drama",
      "summary": "Two grifters team up to pull off the ultimate con.",
      "directors": [
        "George Roy Hill"
      ],
      "stars": [
        "Paul Newman",
        "Robert Redford",
        "Robert Shaw",
        "Charles Durning"
      ]
    },
    {
      "name": "The Godfather",
      "oscar": 1972,
      "released_year": 1972,
      "poster": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "R",
      "duration": "175 min",
      "genre": "Crime, Drama",
      "summary": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      "directors": [
        "Francis Ford Coppola"
      ],
      "stars": [
        "Marlon Brando",
        "Al Pacino",
        "James Caan",
        "Diane Keaton"
      ]
    },
    {
      "name": "The French Connection",
      "oscar": 1971,
      "released_year": 1971,
      "poster": "https://m.media-amazon.com/images/M/MV5BOTZhY2E3NmItMGIwNi00OTA2LThkYmEtODFiZTM0NGI0ZWU5XkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "R",
      "duration": "104 min",
      "genre": "Action, Crime, Drama",
      "summary": "A pair of NYC cops in the Narcotics Bureau stumble onto a drug smuggling job with a French connection.",
      "directors": [
        "William Friedkin"
      ],
      "stars": [
        "Gene Hackman",
        "Roy Scheider",
        "Fernando Rey",
        "Tony Lo Bianco"
      ]
    },
    {
      "name": "Patton",
      "oscar": 1970,
      "released_year": 1970,
      "poster": "https://m.media-amazon.com/images/M/MV5BMmNhZmJhMmYtNjlkMC00MjhjLTk1NzMtMTNlMzYzNjZlMjNiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "GP",
      "duration": "172 min",
      "genre": "Biography, Drama, War",
      "summary": "The World War II phase of the career of controversial American general George S. Patton.",
      "directors": [
        "Franklin J. Schaffner"
      ],
      "stars": [
        "George C. Scott",
        "Karl Malden",
        "Stephen Young",
        "Michael Strong"
      ]
    },
    {
      "name": "Midnight Cowboy",
      "oscar": 1969,
      "released_year": 1969,
      "poster": "https://m.media-amazon.com/images/M/MV5BNTgwZmIzMmYtZjE3Yy00NzgzLTgxNmUtNjlmZDlkMzlhOTJkXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "R",
      "duration": "113 min",
      "genre": "Drama",
      "summary": "A naive hustler travels from Texas to New York City to seek personal fortune, finding a new friend in the process.",
      "directors": [
        "John Schlesinger"
      ],
      "stars": [
        "Dustin Hoffman",
        "Jon Voight",
        "Sylvia Miles",
        "John McGiver"
      ]
    },
    {
      "name": "Oliver!",
      "oscar": 1968,
      "released_year": 1968,
      "poster": "https://m.media-amazon.com/images/M/MV5BNWQwNTE4NWQtZDg0MC00ZDhkLWIzMzQtNDU1MDIxZTNmM2M3XkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "G",
      "duration": "153 min",
      "genre": "Drama, Family, Musical",
      "summary": "After being sold to a mortician, young orphan Oliver Twist runs away and meets a group of boys trained to be pickpockets by an elderly mentor.",
      "directors": [
        "Carol Reed"
      ],
      "stars": [
        "Mark Lester",
        "Ron Moody",
        "Shani Wallis",
        "Oliver Reed"
      ]
    },
    {
      "name": "In the Heat of the Night",
      "oscar": 1967,
      "released_year": 1967,
      "poster": "https://m.media-amazon.com/images/M/MV5BZjZhZTZkNWItZGE1My00MTRkLWI2ZDktMWZkZTIxZWYxOTgzXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "Not Rated",
      "duration": "110 min",
      "genre": "Crime, Drama, Mystery",
      "summary": "A black police detective is asked to investigate a murder in a racially hostile southern town.",
      "directors": [
        "Norman Jewison"
      ],
      "stars": [
        "Sidney Poitier",
        "Rod Steiger",
        "Warren Oates",
        "Lee Grant"
      ]
    },
    {
      "name": "A Man for All Seasons",
      "oscar": 1966,
      "released_year": 1966,
      "poster": "https://m.media-amazon.com/images/M/MV5BMTRjOTA1NzctNzFmMy00ZjcwLWExYjgtYWQyZDM5ZWY1Y2JlXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "G",
      "duration": "120 min",
      "genre": "Biography, Drama, History",
      "summary": "The story of Sir Thomas More, who stood up to King Henry VIII when the King rejected the Roman Catholic Church to obtain a divorce and remarry.",
      "directors": [
        "Fred Zinnemann"
      ],
      "stars": [
        "Paul Scofield",
        "Wendy Hiller",
        "Robert Shaw",
        "Leo McKern"
      ]
    },
    {
      "name": "The Sound of Music",
      "oscar": 1965,
      "released_year": 1965,
      "poster": "https://m.media-amazon.com/images/M/MV5BODIxNjhkYjEtYzUyMi00YTNjLWE1YjktNjAyY2I2MWNkNmNmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "G",
      "duration": "172 min",
      "genre": "Biography, Drama, Family",
      "summary": "A woman leaves an Austrian convent to become a governess to the children of a Naval officer widower.",
      "directors": [
        "Robert Wise"
      ],
      "stars": [
        "Julie Andrews",
        "Christopher Plummer",
        "Eleanor Parker",
        "Richard Haydn"
      ]
    },
    {
      "name": "My Fair Lady",
      "oscar": 1964,
      "released_year": 1964,
      "poster": "https://m.media-amazon.com/images/M/MV5BNGM0ZTU3NmItZmRmMy00YWNjLWEzMWItYzg3MzcwZmM5NjdiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "G",
      "duration": "170 min",
      "genre": "Drama, Family, Musical",
      "summary": "Snobbish phonetics Professor Henry Higgins agrees to a wager that he can make flower girl Eliza Doolittle presentable in high society.",
      "directors": [
        "George Cukor"
      ],
      "stars": [
        "Audrey Hepburn",
        "Rex Harrison",
        "Stanley Holloway",
        "Wilfrid Hyde-White"
      ]
    },
    {
      "name": "Tom Jones",
      "oscar": 1963,
      "released_year": 1963,
      "poster": "https://m.media-amazon.com/images/M/MV5BODEwMGMzNjktODU4NC00NGIyLWJiNTAtZTRlOTc2MGY2NjBhXkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "Not Rated",
      "duration": "129 min",
      "genre": "Adventure, Comedy, History",
      "summary": "The romantic and chivalrous adventures of adopted bastard Tom Jones in 18th-century England.",
      "directors": [
        "Tony Richardson"
      ],
      "stars": [
        "Albert Finney",
        "Susannah York",
        "George Devine",
        "Rachel Kempson"
      ]
    },
    {
      "name": "Lawrence of Arabia",
      "oscar": 1962,
      "released_year": 1962,
      "poster": "https://m.media-amazon.com/images/M/MV5BYWY5ZjhjNGYtZmI2Ny00ODM0LWFkNzgtZmI1YzA2N2MxMzA0XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "Approved",
      "duration": "228 min",
      "genre": "Adventure, Biography, Drama",
      "summary": "The story of T.E. Lawrence, the English officer who successfully united and led the diverse, often warring, Arab tribes during World War I in order to fight the Turks.",
      "directors": [
        "David Lean"
      ],
      "stars": [
        "Peter O'Toole",
        "Alec Guinness",
        "Anthony Quinn",
        "Jack Hawkins"
      ]
    },
    {
      "name": "West Side Story",
      "oscar": 1961,
      "released_year": 1961,
      "poster": "https://m.media-amazon.com/images/M/MV5BMTM0NDAxOTI5MF5BMl5BanBnXkFtZTcwNjI4Mjg3NA@@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "Not Rated",
      "duration": "153 min",
      "genre": "Crime, Drama, Musical",
      "summary": "Two youngsters from rival New York City gangs fall in love, but tensions between their respective friends build toward tragedy.",
      "directors": [
        "Jerome Robbins",
        "Robert Wise"
      ],
      "stars": [
        "Natalie Wood",
        "George Chakiris",
        "Richard Beymer",
        "Russ Tamblyn"
      ]
    },
    {
      "name": "The Apartment",
      "oscar": 1960,
      "released_year": 1960,
      "poster": "https://m.media-amazon.com/images/M/MV5BNzkwODFjNzItMmMwNi00MTU5LWE2MzktM2M4ZDczZGM1MmViXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "Not Rated",
      "duration": "125 min",
      "genre": "Comedy, Drama, Romance",
      "summary": "A man tries to rise in his company by letting its executives use his apartment for trysts, but complications and a romance of his own ensue.",
      "directors": [
        "Billy Wilder"
      ],
      "stars": [
        "Jack Lemmon",
        "Shirley MacLaine",
        "Fred MacMurray",
        "Ray Walston"
      ]
    },
    {
      "name": "Ben-Hur",
      "oscar": 1959,
      "released_year": 1959,
      "poster": "https://m.media-amazon.com/images/M/MV5BNjgxY2JiZDYtZmMwOC00ZmJjLWJmODUtMTNmNWNmYWI5ODkwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "G",
      "duration": "212 min",
      "genre": "Adventure, Drama, History",
      "summary": "After a Jewish prince is betrayed and sent into slavery by a Roman friend, he regains his freedom and comes back for revenge.",
      "directors": [
        "William Wyler"
      ],
      "stars": [
        "Charlton Heston",
        "Jack Hawkins",
        "Stephen Boyd",
        "Haya Harareet"
      ]
    },
    {
      "name": "Gigi",
      "oscar": 1958,
      "released_year": 1958,
      "poster": "https://m.media-amazon.com/images/M/MV5BMWIzNzlkMWUtY2VhYy00NWMwLTg3MWUtZWY4ODZjMjBiMmM1XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "G",
      "duration": "115 min",
      "genre": "Comedy, Musical, Romance",
      "summary": "Weary of the conventions of Parisian society, a rich playboy and a youthful courtesan-in-training enjoy a platonic friendship, but it may not stay platonic for long.",
      "directors": [
        "Vincente Minnelli",
        "Charles Walters"
      ],
      "stars": [
        "Leslie Caron",
        "Maurice Chevalier",
        "Louis Jourdan",
        "Hermione Gingold"
      ]
    },
    {
      "name": "The Bridge on the River Kwai",
      "oscar": 1957,
      "released_year": 1957,
      "poster": "https://m.media-amazon.com/images/M/MV5BMGVhNjhjODktODgxYS00MDdhLTlkZjktYTkyNzQxMTU0ZDYxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "PG",
      "duration": "161 min",
      "genre": "Adventure, Drama, War",
      "summary": "British POWs are forced to build a railway bridge across the river Kwai for their Japanese captors, not knowing that the allied forces are planning to destroy it.",
      "directors": [
        "David Lean"
      ],
      "stars": [
        "William Holden",
        "Alec Guinness",
        "Jack Hawkins",
        "Sessue Hayakawa"
      ]
    },
    {
      "name": "Around the World in 80 Days",
      "oscar": 1956,
      "released_year": 1956,
      "poster": "https://m.media-amazon.com/images/M/MV5BNjRhNjVlYTgtODZiOS00OTVhLWE4ZTItZjc3MTFiYWY1YjI5L2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "G",
      "duration": "175 min",
      "genre": "Adventure, Comedy, Family",
      "summary": "A Victorian Englishman bets that with the new steamships and railways he can circumnavigate the globe in eighty days.",
      "directors": [
        "Michael Anderson",
        "John Farrow"
      ],
      "stars": [
        "David Niven",
        "Cantinflas",
        "Shirley MacLaine",
        "Robert Newton"
      ]
    },
    {
      "name": "Marty",
      "oscar": 1955,
      "released_year": 1955,
      "poster": "https://m.media-amazon.com/images/M/MV5BMDhjZjAzZTktMTY0MC00ZTVhLWE4NDQtZjIyN2JiYjZlMjU0XkEyXkFqcGdeQXVyMTg2NTc4MzA@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "Not Rated",
      "duration": "90 min",
      "genre": "Drama, Romance",
      "summary": "A middle-aged butcher and a school teacher who have given up on the idea of love meet at a dance and fall for each other.",
      "directors": [
        "Delbert Mann"
      ],
      "stars": [
        "Ernest Borgnine",
        "Betsy Blair",
        "Esther Minciotti",
        "Augusta Ciolli"
      ]
    },
    {
      "name": "On the Waterfront",
      "oscar": 1954,
      "released_year": 1954,
      "poster": "https://m.media-amazon.com/images/M/MV5BY2I0MWFiZDMtNWQyYy00Njk5LTk3MDktZjZjNTNmZmVkYjkxXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "Approved",
      "duration": "108 min",
      "genre": "Crime, Drama, Thriller",
      "summary": "An ex-prize fighter turned longshoreman struggles to stand up to his corrupt union bosses.",
      "directors": [
        "Elia Kazan"
      ],
      "stars": [
        "Marlon Brando",
        "Karl Malden",
        "Lee J. Cobb",
        "Rod Steiger"
      ]
    },
    {
      "name": "From Here to Eternity",
      "oscar": 1953,
      "released_year": 1953,
      "poster": "https://m.media-amazon.com/images/M/MV5BM2U3YzkxNGMtYWE0YS00ODk0LTk1ZGEtNjk3ZTE0MTk4MzJjXkEyXkFqcGdeQXVyNDk0MDg4NDk@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "Passed",
      "duration": "118 min",
      "genre": "Drama, Romance, War",
      "summary": "In Hawaii in 1941, a private is cruelly punished for not boxing on his unit's team, while his captain's wife and second-in-command are falling in love.",
      "directors": [
        "Fred Zinnemann"
      ],
      "stars": [
        "Burt Lancaster",
        "Montgomery Clift",
        "Deborah Kerr",
        "Donna Reed"
      ]
    },
    {
      "name": "The Greatest Show on Earth",
      "oscar": 1952,
      "released_year": 1952,
      "poster": "https://m.media-amazon.com/images/M/MV5BMzg5MWIyMjItYWMyYS00YTFjLWFlZGMtZTJkNzgyY2VmY2U2XkEyXkFqcGdeQXVyNzE2NDk3NTY@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "Passed",
      "duration": "152 min",
      "genre": "Drama, Family, Romance",
      "summary": "The dramatic lives of trapeze artists, a clown, and an elephant trainer are told against a background of circus spectacle.",
      "directors": [
        "Cecil B. DeMille"
      ],
      "stars": [
        "James Stewart",
        "Charlton Heston",
        "Betty Hutton",
        "Cornel Wilde"
      ]
    },
    {
      "name": "An American in Paris",
      "oscar": 1951,
      "released_year": 1951,
      "poster": "https://m.media-amazon.com/images/M/MV5BMzFkNGM0YTUtZjY5Ny00NzBkLWE1NTAtYzUxNjUyZmJlODMwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "Passed",
      "duration": "114 min",
      "genre": "Drama, Musical, Romance",
      "summary": "Three friends struggle to find work in Paris. Things become more complicated when two of them fall in love with the same woman.",
      "directors": [
        "Vincente Minnelli"
      ],
      "stars": [
        "Gene Kelly",
        "Leslie Caron",
        "Oscar Levant",
        "Georges Guétary"
      ]
    },
    {
      "name": "All About Eve",
      "oscar": 1950,
      "released_year": 1950,
      "poster": "https://m.media-amazon.com/images/M/MV5BMTY2MTAzODI5NV5BMl5BanBnXkFtZTgwMjM4NzQ0MjE@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "Passed",
      "duration": "138 min",
      "genre": "Drama",
      "summary": "A seemingly timid but secretly ruthless ingénue insinuates herself into the lives of an aging Broadway star and her circle of theater friends.",
      "directors": [
        "Joseph L. Mankiewicz"
      ],
      "stars": [
        "Bette Davis",
        "Anne Baxter",
        "George Sanders",
        "Celeste Holm"
      ]
    },
    {
      "name": "All the King's Men",
      "oscar": 1949,
      "released_year": 1949,
      "poster": "https://m.media-amazon.com/images/M/MV5BZjQyN2MwMjAtNmJmZS00OWZlLWE1NGQtOGZmYmRjZjIyNWEyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "Approved",
      "duration": "110 min",
      "genre": "Drama, Film-Noir",
      "summary": "The rise and fall of a corrupt politician, who makes his friends richer and retains power by dint of a populist appeal.",
      "directors": [
        "Robert Rossen"
      ],
      "stars": [
        "Broderick Crawford",
        "John Ireland",
        "Joanne Dru",
        "John Derek"
      ]
    },
    {
      "name": "Hamlet",
      "oscar": 1948,
      "released_year": 1948,
      "poster": "https://m.media-amazon.com/images/M/MV5BMTQ5MTA5NjYyOV5BMl5BanBnXkFtZTcwMjI5MjkzNA@@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "Not Rated",
      "duration": "154 min",
      "genre": "Drama",
      "summary": "Prince Hamlet struggles over whether or not he should kill his uncle, whom he suspects has murdered his father, the former king.",
      "directors": [
        "Laurence Olivier"
      ],
      "stars": [
        "Laurence Olivier",
        "Jean Simmons",
        "John Laurie",
        "Esmond Knight"
      ]
    },
    {
      "name": "Gentleman's Agreement",
      "oscar": 1947,
      "released_year": 1947,
      "poster": "https://m.media-amazon.com/images/M/MV5BMTZhYWIxNmMtYzE2OS00YzljLWI2YTQtZTE0NDU5ZDQwZTc0L2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "Not Rated",
      "duration": "118 min",
      "genre": "Drama, Romance",
      "summary": "A reporter pretends to be Jewish in order to cover a story on anti-Semitism, and personally discovers the true depths of bigotry and hatred.",
      "directors": [
        "Elia Kazan"
      ],
      "stars": [
        "Gregory Peck",
        "Dorothy McGuire",
        "John Garfield",
        "Celeste Holm"
      ]
    },
    {
      "name": "The Best Years of Our Lives",
      "oscar": 1946,
      "released_year": 1946,
      "poster": "https://m.media-amazon.com/images/M/MV5BY2RmNTRjYzctODI4Ni00MzQyLWEyNTAtNjU0N2JkMTNhNjJkXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "Approved",
      "duration": "170 min",
      "genre": "Drama, Romance, War",
      "summary": "Three World War II veterans return home to small-town America to discover that they and their families have been irreparably changed.",
      "directors": [
        "William Wyler"
      ],
      "stars": [
        "Myrna Loy",
        "Dana Andrews",
        "Fredric March",
        "Teresa Wright"
      ]
    },
    {
      "name": "The Lost Weekend",
      "oscar": 1945,
      "released_year": 1945,
      "poster": "https://m.media-amazon.com/images/M/MV5BMTk4NDQ0NjgyNF5BMl5BanBnXkFtZTgwMTE3NTkxMTE@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "Not Rated",
      "duration": "101 min",
      "genre": "Drama, Film-Noir",
      "summary": "The desperate life of a chronic alcoholic is followed through a four-day drinking bout.",
      "directors": [
        "Billy Wilder"
      ],
      "stars": [
        "Ray Milland",
        "Jane Wyman",
        "Phillip Terry",
        "Howard Da Silva"
      ]
    },
    {
      "name": "Going My Way",
      "oscar": 1944,
      "released_year": 1944,
      "poster": "https://m.media-amazon.com/images/M/MV5BODU3MDUzMzItNjk4Ni00ODQxLWI2NDUtNDIzMzc5YmYyMTYwXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "Passed",
      "duration": "126 min",
      "genre": "Comedy, Drama, Music",
      "summary": "Father Charles O'Malley, a young priest at a financially failing Church in a tough neighborhood, gains support and inspires his superior.",
      "directors": [
        "Leo McCarey"
      ],
      "stars": [
        "Bing Crosby",
        "Barry Fitzgerald",
        "Frank McHugh",
        "James Brown"
      ]
    },
    {
      "name": "Mrs. Miniver",
      "oscar": 1943,
      "released_year": 1942,
      "poster": "https://m.media-amazon.com/images/M/MV5BY2UxNjcwYmQtODc1NC00ZjQ1LTk4NDctZTE0NjhlMjNlOTEyXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "Not Rated",
      "duration": "134 min",
      "genre": "Drama, Romance, War",
      "summary": "A British family struggles to survive the first months of World War II.",
      "directors": [
        "William Wyler"
      ],
      "stars": [
        "Greer Garson",
        "Walter Pidgeon",
        "Teresa Wright",
        "May Whitty"
      ]
    },
    {
      "name": "Casablanca",
      "oscar": 1942,
      "released_year": 1942,
      "poster": "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "PG",
      "duration": "102 min",
      "genre": "Drama, Romance, War",
      "summary": "A cynical American expatriate struggles to decide whether or not he should help his former lover and her fugitive husband escape French Morocco.",
      "directors": [
        "Michael Curtiz"
      ],
      "stars": [
        "Humphrey Bogart",
        "Ingrid Bergman",
        "Paul Henreid",
        "Claude Rains"
      ]
    },
    {
      "name": "How Green Was My Valley",
      "oscar": 1941,
      "released_year": 1941,
      "poster": "https://m.media-amazon.com/images/M/MV5BMjE1YWRmMWEtYTQ0Yy00NGEwLWFmNzAtZDkwOWNjMzkwYzJmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "Not Rated",
      "duration": "118 min",
      "genre": "Drama, Family",
      "summary": "At the turn of the century in a Welsh mining village, the Morgans, he stern, she gentle, raise coal-mining sons and hope their youngest will find a better life.",
      "directors": [
        "John Ford"
      ],
      "stars": [
        "Walter Pidgeon",
        "Maureen O'Hara",
        "Anna Lee",
        "Donald Crisp"
      ]
    },
    {
      "name": "Rebecca",
      "oscar": 1940,
      "released_year": 1940,
      "poster": "https://m.media-amazon.com/images/M/MV5BYTcxYWExOTMtMWFmYy00ZjgzLWI0YjktNWEzYzJkZTg0NDdmL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "Approved",
      "duration": "130 min",
      "genre": "Drama, Mystery, Romance",
      "summary": "A self-conscious woman juggles adjusting to her new role as an aristocrat's wife and avoiding being intimidated by his first wife's spectral presence.",
      "directors": [
        "Alfred Hitchcock"
      ],
      "stars": [
        "Laurence Olivier",
        "Joan Fontaine",
        "George Sanders",
        "Judith Anderson"
      ]
    },
    {
      "name": "Gone with the Wind",
      "oscar": 1939,
      "released_year": 1939,
      "poster": "https://m.media-amazon.com/images/M/MV5BYjUyZWZkM2UtMzYxYy00ZmQ3LWFmZTQtOGE2YjBkNjA3YWZlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "Passed",
      "duration": "238 min",
      "genre": "Drama, History, Romance",
      "summary": "A manipulative woman and a roguish man conduct a turbulent romance during the American Civil War and Reconstruction periods.",
      "directors": [
        "Victor Fleming",
        "George Cukor",
        "Sam Wood"
      ],
      "stars": [
        "Clark Gable",
        "Vivien Leigh",
        "Thomas Mitchell",
        "Barbara O'Neil"
      ]
    },
    {
      "name": "You Can't Take It with You",
      "oscar": 1938,
      "released_year": 1938,
      "poster": "https://m.media-amazon.com/images/M/MV5BMTYzYzY0YzgtN2ZhNy00MjNiLTk1NTYtYTQ2M2E3NjJiOWYxXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "Passed",
      "duration": "126 min",
      "genre": "Comedy, Drama, Romance",
      "summary": "A man from a family of rich snobs becomes engaged to a woman from a good-natured but decidedly eccentric family.",
      "directors": [
        "Frank Capra"
      ],
      "stars": [
        "Jean Arthur",
        "James Stewart",
        "Lionel Barrymore",
        "Edward Arnold"
      ]
    },
    {
      "name": "The Life of Emile Zola",
      "oscar": 1937,
      "released_year": 1937,
      "poster": "https://m.media-amazon.com/images/M/MV5BNDI2ODAyNDQzMV5BMl5BanBnXkFtZTgwNzE2MzI2MzE@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "Passed",
      "duration": "116 min",
      "genre": "Biography, Drama",
      "summary": "The biopic of the famous French muckraking writer and his involvement in fighting the injustice of the Dreyfuss Affair.",
      "directors": [
        "William Dieterle"
      ],
      "stars": [
        "Paul Muni",
        "Gale Sondergaard",
        "Joseph Schildkraut",
        "Gloria Holden"
      ]
    },
    {
      "name": "The Great Ziegfeld",
      "oscar": 1936,
      "released_year": 1936,
      "poster": "https://m.media-amazon.com/images/M/MV5BOTEzMTZjNjQtMDdiOC00YzU3LTgwODItYjEyYjRiNWFiNmZkXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "Not Rated",
      "duration": "176 min",
      "genre": "Biography, Drama, Musical",
      "summary": "The ups and downs of Florenz Ziegfeld Jr., famed producer of extravagant stage revues, are portrayed.",
      "directors": [
        "Robert Z. Leonard"
      ],
      "stars": [
        "William Powell",
        "Myrna Loy",
        "Luise Rainer",
        "Frank Morgan"
      ]
    },
    {
      "name": "Mutiny on the Bounty",
      "oscar": 1935,
      "released_year": 1935,
      "poster": "https://m.media-amazon.com/images/M/MV5BYThmYTIyZDctMjhlOC00ZTI1LWI5NDctYjdkMDJmN2FhODk5XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "Passed",
      "duration": "132 min",
      "genre": "Adventure, Biography, Drama",
      "summary": "A tyrannical ship captain takes his reluctant crew on a two-year voyage that will change British maritime law forever.",
      "directors": [
        "Frank Lloyd"
      ],
      "stars": [
        "Charles Laughton",
        "Clark Gable",
        "Franchot Tone",
        "Herbert Mundin"
      ]
    },
    {
      "name": "It Happened One Night",
      "oscar": 1934,
      "released_year": 1934,
      "poster": "https://m.media-amazon.com/images/M/MV5BYzJmMWE5NjAtNWMyZS00NmFiLWIwMDgtZDE2NzczYWFhNzIzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "Approved",
      "duration": "105 min",
      "genre": "Comedy, Romance",
      "summary": "A spoiled heiress running away from her family is helped by a man who is actually a reporter in need of a story.",
      "directors": [
        "Frank Capra"
      ],
      "stars": [
        "Clark Gable",
        "Claudette Colbert",
        "Walter Connolly",
        "Roscoe Karns"
      ]
    },
    {
      "name": "Cavalcade",
      "oscar": 1933,
      "released_year": 1933,
      "poster": "https://m.media-amazon.com/images/M/MV5BNWJlMjljMmItZTNiNC00NGI3LWFhYzgtMTk1ZmNhZjZiYzU2XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "Passed",
      "duration": "112 min",
      "genre": "Drama, Romance, War",
      "summary": "A portrayal of the triumphs and tragedies of two English families, the upper-crust Marryots and the working-class Bridgeses, from 1899 to 1933.",
      "directors": [
        "Frank Lloyd"
      ],
      "stars": [
        "Diana Wynyard",
        "Clive Brook",
        "Una O'Connor",
        "Herbert Mundin"
      ]
    },
    {
      "name": "Grand Hotel",
      "oscar": 1932,
      "released_year": 1932,
      "poster": "https://m.media-amazon.com/images/M/MV5BODc5OWY0MWQtZjgzMS00YTA1LTk1ZmEtY2VmYTgwYmU4ZjAwXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "Not Rated",
      "duration": "112 min",
      "genre": "Drama, Romance",
      "summary": "A group of very different individuals staying at a luxurious hotel in Berlin deal with each of their respective dramas.",
      "directors": [
        "Edmund Goulding"
      ],
      "stars": [
        "Greta Garbo",
        "John Barrymore",
        "Joan Crawford",
        "Wallace Beery"
      ]
    },
    {
      "name": "Cimarron",
      "oscar": 1931,
      "released_year": 1931,
      "poster": "https://m.media-amazon.com/images/M/MV5BYWQwZGM0MTktNDM1NC00MTZlLTllNzctYTllZWI2MzdiNmMyXkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "Passed",
      "duration": "123 min",
      "genre": "Drama, Western",
      "summary": "A newspaper editor settles in an Oklahoma boom town with his reluctant wife at the end of the nineteenth century.",
      "directors": [
        "Wesley Ruggles"
      ],
      "stars": [
        "Richard Dix",
        "Irene Dunne",
        "Estelle Taylor",
        "Nance O'Neil"
      ]
    },
    {
      "name": "All Quiet on the Western Front",
      "oscar": 1930,
      "released_year": 1930,
      "poster": "https://m.media-amazon.com/images/M/MV5BMzg2MWQ4MDEtOGZlNi00MTg0LWIwMjQtYWY5NTQwYmUzMWNmXkEyXkFqcGdeQXVyMzg2MzE2OTE@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "Passed",
      "duration": "152 min",
      "genre": "Drama, War",
      "summary": "A young soldier faces profound disillusionment in the soul-destroying horror of World War I.",
      "directors": [
        "Lewis Milestone"
      ],
      "stars": [
        "Lew Ayres",
        "Louis Wolheim",
        "John Wray",
        "Arnold Lucy"
      ]
    },
    {
      "name": "The Broadway Melody",
      "oscar": 1929,
      "released_year": 1929,
      "poster": "https://m.media-amazon.com/images/M/MV5BZmJlOWM4NDEtYmZmYS00MTIyLTgwYWMtMjFhYmNhZWU4ZmVmXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "Passed",
      "duration": "100 min",
      "genre": "Drama, Musical, Romance",
      "summary": "A pair of sisters from the vaudeville circuit try to make it big time on Broadway, but matters of the heart complicate the attempt.",
      "directors": [
        "Harry Beaumont"
      ],
      "stars": [
        "Bessie Love",
        "Anita Page",
        "Charles King",
        "The Angeles Twins"
      ]
    },
    {
      "name": "Wings",
      "oscar": 1928,
      "released_year": 1927,
      "poster": "https://m.media-amazon.com/images/M/MV5BYTI1YjgzZmMtZmIyYy00YTkwLTgyOWEtOTVlNTFkZmMzNTk3XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "PG-13",
      "duration": "144 min",
      "genre": "Drama, Romance, War",
      "summary": "Two young men, one rich, one middle class, who are in love with the same woman, become fighter pilots in World War I.",
      "directors": [
        "William A. Wellman",
        "Harry d'Abbadie d'Arrast"
      ],
      "stars": [
        "Clara Bow",
        "Charles 'Buddy' Rogers",
        "Richard Arlen",
        "Jobyna Ralston"
      ]
    },
    {
      "name": "Sunrise",
      "oscar": 1927,
      "released_year": 1927,
      "poster": "https://m.media-amazon.com/images/M/MV5BNDVkYmYwM2ItNzRiMy00NWQ4LTlhMjMtNDI1ZDYyOGVmMzJjXkEyXkFqcGdeQXVyNTgzMzU5MDI@._V1_UX400_CR0,0,400,600_AL_.jpg",
      "rating": "Passed",
      "duration": "94 min",
      "genre": "Drama, Romance",
      "summary": "An allegorical tale about a man fighting the good and evil within him. Both sides are made flesh - one a sophisticated woman he is attracted to and the other his wife.",
      "directors": [
        "F.W. Murnau"
      ],
      "stars": [
        "George O'Brien",
        "Janet Gaynor",
        "Margaret Livingston",
        "Bodil Rosing"
      ]
    }
  ]
    books.forEach(function(book)
    {
        console.log("book")
        const bookDiv=document.createElement('div')
        bookDiv.classList.add('book')
        const name=document.createElement('h2')
        name.textContent=book.name
        const image=document.createElement('img')
        image.src=book.poster
        const oscar=document.createElement('p')
        oscar.textContent="oscer:"+book.oscar
        image.height="200"
        image.width="200"
        const released_year=document.createElement('p')
        released_year.textContent="released_year:"+book.released_year
        const rating=document.createElement('p')
        rating.textContent="rating:"+book.rating
        const duration=document.createElement('p')
        duration.textContent="duration:"+book.duration
        const genre=document.createElement('p')
        genre.textContent="genre:"+book.genre
        const summary=document.createElement('p')
        summary.textContent="summary:"+book.summary
        const directors=document.createElement('p')
        directors.textContent="directors:"+book.directors
        const stars=document.createElement('p')
        stars.textContent="stars:"+book.stars
        mainDiv.appendChild(bookDiv)
        bookDiv.append(name,image,oscar,released_year,rating,duration,genre,summary,directors,stars)
    }
    )
    