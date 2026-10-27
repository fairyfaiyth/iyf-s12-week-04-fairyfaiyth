const postsJson = '[{"id":1,"title":"Welcome to my blog","likes":12,"published":true},{"id":2,"title":"Week 4 recap","likes":30,"published":true},{"id":3,"title":"Draft ideas","likes":0,"published":false},{"id":4,"title":"Learning functions","likes":21,"published":true}]';

try {
    // 1. Parse it into an array
    const posts = JSON.parse(postsJson);
    console.log(posts.length);

    // 2. Keep only published posts
    const published = posts.filter(p => p.published);

    // 3. Sort by likes, highest first
    published.sort((a, b) => b.likes - a.likes);

    // 4. Map to strings
    const summaries = published.map(p => `${p.title} (${p.likes} likes)`);
    console.log(summaries);

    // 5. Stringify the filtered array back to text
    const backToText = JSON.stringify(published, null, 2);
    console.log(backToText);
    console.log(typeof backToText);
} catch (error) {
    console.log("Invalid JSON:", error.message);
}
