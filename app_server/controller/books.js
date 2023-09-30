module.exports.homelist = function(req, res) {
    renderHomepage(req, res);
};

var renderHomepage = function(req, res){
    res.render('books-list', {
        title: 'Orchid - Sowing Seeds of Insight into Every Story.',
        pageHeader: {
            title: 'Orchid',
            strapline: 'Sowing Seeds of Insight into Every Story!'
        },
        sidebar: "Delve into the World of Literature with ORCHID – where each book unfolds like a petal, reviews blossom with insight, and readers find a garden of stories waiting to be explored."
    });
};


module.exports.bookInfo = function(req, res) {
    res.render('book-info', {
        title: 'Normal People',
        pageHeader: {
            title: 'Normal People'
        },
        sidebar: {
            context: 'is on Orchid because it has great literary elements and you will get relief reading this book.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        book: {
            name: 'Normal People',
            author: 'Sally Rooney',
            author_info: 'A masterful weaver of intricate relationships and raw emotion in contemporary fiction',
            rating: 4,
            literary_elements: ['Love', 'Friendship', 'Emotional Intimacy'],
            type: 'Fiction',
            reviews: [{
                author: 'Varsha Reddy',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great book. I can\'t say enough good things about it.'
            }, {
                author: 'Bhavya',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'It was okay.'
            }],
            overview: 'An Enthralling Dance of Intimacy',
            book_review: 'Sally Rooney\'s "Normal People" is a stunning exploration of the ever-changing dynamics between two young individuals, Connell and Marianne. Their relationship defies easy categorization, and Rooney\'s decision to focus on the subtle shifts in power, understanding, and emotion between them results in a hauntingly beautiful narrative. From the very outset, the differences in their backgrounds are clear: Connell is popular and well-liked at school but comes from a less affluent background, while Marianne is intelligent and wealthy but is ostracized by her peers. These distinctions set the stage for a compelling exploration of class, social standing, and self-worth. Rooney\'s prose is deceptively simple, yet it manages to convey the profound depths of emotion and the intricacies of human relationships. There\'s an element of rawness in the way the author portrays young love, making readers reminisce about their own encounters with passion, misunderstandings, and growth. One of the standout features of the novel is its portrayal of the unspoken – those in-between moments, the silent understandings, and misinterpretations that define the lives of the protagonists. Their relationship, filled with both tenderness and tension, serves as a mirror to our own experiences, making "Normal People" a universally relatable tale. For those looking to dive into a book that offers both a slice of life and deep introspection, "Normal People" is a must-read. It\'s a meditation on the complexities of young love, the societal structures we navigate, and the personal growth that often comes from pain and misunderstanding.'
        }
    });
};

module.exports.bookInfo2 = function(req, res) {
    res.render('book-info2', {
        title: 'Educated',
        pageHeader: {
            title: 'Educated'
        },
        sidebar: {
            context: 'is on Orchid because it has great literary elements and you will get relief reading this book.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        book: {
            name: 'Educated',
            author: 'Tara Westover',
            author_info: 'A beacon of resilience, chronicling her transformative journey from rural isolation to academic enlightenment',
            rating: 5,
            literary_elements: ['Memoir'],
            type: 'Non-Fiction',
            reviews: [{
                author: 'Varsha Reddy',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great book. I can\'t say enough good things about it.'
            }, {
                author: 'Bhavya',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'It was okay.'
            }],
            overview: 'A Riveting Journey from Isolation to Enlightenment',
            book_review: 'Tara Westover\'s "Educated" stands as a monumental testament to the transformative power of learning. From the remote mountains of Idaho to the elite universities of the world, Westover\'s journey is nothing short of extraordinary, and her narrative voice is as compelling as her life story. Reading "Educated" often feels like navigating a tumultuous sea, with waves of familial loyalty clashing against the tide of enlightenment and personal growth. Westover\'s depiction of her family is intricate; despite the abuse and the extreme beliefs, there\'s a tangible thread of love and connection, making the reader grapple with the complexities of familial ties. Westover\'s prose is clear-eyed and evocative, capturing the nuances of her challenging life with both compassion and objectivity. The resilience she displays, her struggle with her past and identity, and her eventual pursuit of higher education are deeply inspiring. This memoir does more than just recount Westover\'s life. It prompts readers to reflect on the nature of education — not just as a means to knowledge but as a pathway to self-discovery. "Educated" is a heart-wrenching, enlightening, and ultimately triumphant exploration of one woman\'s determination to create a place for herself in the world against almost insurmountable odds.'
        }
    });
};

module.exports.bookInfo3 = function(req, res) {
    res.render('book-info3', {
        title: 'The Silent Patient',
        pageHeader: {
            title: 'The Silent Patient'
        },
        sidebar: {
            context: 'is on Orchid because it has great literary elements and you will get relief reading this book.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        book: {
            name: 'The Silent Patient',
            author: 'ALex Michaelides',
            author_info: 'A master of psychological suspense, weaving intricate narratives that delve deep into the human psyche',
            rating: 5,
            literary_elements: ['Thriller', 'Betrayal', 'Love'],
            type: 'Mystery',
            reviews: [{
                author: 'Varsha Reddy',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great book. I can\'t say enough good things about it.'
            }, {
                author: 'Bhavya',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'It was okay.'
            }],
            overview: 'A Masterclass in Psychological Suspense',
            book_review: 'Alex Michaelides\' debut novel, "The Silent Patient," is a tantalizing psychological puzzle that keeps readers on their toes from start to finish. Seamlessly weaving elements of classical tragedy with contemporary psychological intrigue, Michaelides crafts a tale that is as compelling as it is chilling. At the heart of the story is the enigmatic Alicia Berenson, whose mute presence casts a long, haunting shadow over every page. As readers, we are drawn into the labyrinth of her mind, seeking answers, just as Theo Faber does. Michaelides brilliantly lays out clues, red herrings, and character insights, asking us to play detective alongside Theo. One of the standout aspects of the novel is its pacing. Just when you think you\'ve grasped the narrative, a new layer unfolds, keeping the suspense taut and the pages turning. The exploration of human psyche, trauma, and the lengths to which a person can go when pushed to the edge, makes "The Silent Patient" not just a thriller, but also a deep dive into the complexities of the human mind. In essence, "The Silent Patient" is a mesmerizing dance of betrayal, love, and the shadows of our past. A must-read for those who relish narratives that challenge perceptions and are as twisted as the human psyche can sometimes be.'
        }
    });
};

module.exports.bookInfo4 = function(req, res) {
    res.render('book-info4', {
        title: 'Atomic Habits',
        pageHeader: {
            title: 'Atomic Habits'
        },
        sidebar: {
            context: 'is on Orchid because it has great literary elements and you will get relief reading this book.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        book: {
            name: 'Atomic Habits',
            author: 'James Clear',
            author_info: 'An advocate for incremental change, illuminating the path to mastery through the power of habits',
            rating: 5,
            literary_elements: ['Self Help', 'Behaviour'],
            type: 'Personal Development',
            reviews: [{
                author: 'Varsha Reddy',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great book. I can\'t say enough good things about it.'
            }, {
                author: 'Bhavya',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'It was okay.'
            }],
            overview: 'A Game-Changer for Habit Formation',
            book_review: 'In the realm of personal development literature, James Clear\'s "Atomic Habits" emerges as a refreshing, actionable guide to reshaping one\'s life one habit at a time. Clear doesn\'t merely scratch the surface; he delves deep into the mechanics of habit formation, offering readers both an understanding of why certain behaviors stick and a toolkit to mold those behaviors. What sets "Atomic Habits" apart is its practicality. Clear\'s writing is lucid and his strategies are laid out in an accessible manner. The book is replete with actionable insights, making the journey of personal change feel attainable and logical. Perhaps one of the most resonating ideas presented is the notion of \'identity-based habits.\' Clear posits that real change doesn\'t stem from what we do but from who we believe we are. This shift in perspective – from outcome-based to identity-based – is profound, urging readers to rethink their approach to personal growth. "Atomic Habits" isn\'t just a book; it\'s a call to action. For anyone feeling stuck in a loop of negative patterns or simply seeking to enhance their daily routines, this book is a beacon, illuminating a clear path forward. Dive in and discover the transformative power of small, consistent actions.'
        }
    });
};

module.exports.bookReview = function(req, res) {
    res.render('book-review-form', {
        title: 'Review Normal People on Orchid',
        pageHeader: {
            title: 'Review Normal People'
        }
    });
};

module.exports.bookReview2 = function(req, res) {
    res.render('book-review-form2', {
        title: 'Review Educated on Orchid',
        pageHeader: {
            title: 'Review Educated'
        }
    });
};

module.exports.bookReview3 = function(req, res) {
    res.render('book-review-form3', {
        title: 'Review The Silent Patient on Orchid',
        pageHeader: {
            title: 'Review The Silent Patient'
        }
    });
};

module.exports.bookReview4 = function(req, res) {
    res.render('book-review-form4', {
        title: 'Review Atmoic Habits on Orchid',
        pageHeader: {
            title: 'Review Atmoic Habits'
        }
    });
};