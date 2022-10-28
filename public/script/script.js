const url = document.location.origin;
console.log(document.querySelectorAll('input'));
const [Vertice,Edge,Name] = document.querySelectorAll('input');
const generateButton = document.querySelector('#generateButton');

generateButton.addEventListener('click',()=>{
    initializeGraph(Vertice.value,Edge.value,Name.value);
    [Vertice,Edge,Name].forEach(e => {
        e.value="";
    });
})
const initializeGraph = async (n,m,str) =>{
    const {data} = await axios.get(url+`/api?n=${n}&m=${m}&str=${str}`);
    console.log(data);
}
initializeGraph();
