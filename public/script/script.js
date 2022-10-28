const url = document.location.origin;

const initializeGraph = async () =>{
    const {data} = await axios.get(url+'/api');
    console.log(data);
}
initializeGraph();
