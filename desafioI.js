const getPosts = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    try{
        const response = await fetch(url);
        
        if(!response.ok) {
            console.log(response.status);
        }

        const resultados = await response.json();
        showData (resultados);
    }
    catch (error){
        console.log(error);
    }
};

    const showData = (resultados) => {
        const listado = document.getElementById('post-data');
        let html = '<ul>';
        resultados.forEach(post => {
            html += `<li><strong>${post.title}</strong><br> ${post.body}</li><br>`;
        });   
        html += '</ul>'
        listado.innerHTML = html; 
    };