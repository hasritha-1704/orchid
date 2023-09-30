module.exports.about = function(req, res) {
    res.render('generic-text', {
        title: 'About Orchid',
        content: 'Welcome to ORCHID, where our love for literature blooms.\n\nOur Mission: To cultivate a global community of readers and authors, offering insightful reviews that not only evaluate the quality of books but also celebrate the diversity and richness of literary art.\n\nWho We Are: ORCHID is a bouquet of passionate book lovers, critics, and literary enthusiasts. Founded in 2023, we realized that the world of literature is as vast and varied as nature itself. Just like the orchid flower, which represents beauty, strength, and uniqueness, each book holds a distinctive story, waiting to be told and heard.\n\nWhat We Do: At ORCHID, we delve deep into the pages, bringing you unbiased, comprehensive, and engaging reviews spanning across genres, authors, and regions. From the latest bestsellers to hidden gems, our team is dedicated to guiding you through your next literary adventure.'
    });
};

module.exports.signin = function(req, res) {
    res.render('sign-in', {title:'Sign In'});
};

module.exports.register = function(req, res) {
    res.render('register', {title:'Register'});
};

