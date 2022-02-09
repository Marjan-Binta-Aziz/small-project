let count = 0;
/* document.getElementById('add').addEventListener('click', function(e){
    count = count + 1;
    document.getElementById('count').innerText = count;
}); */

//small version of that
function add(e) {
    count++;
    control('count');
}
function minus(e) {
    count--;
    control('count');
}


//minus
document.getElementById('minus').addEventListener('click', function(e){
    count--;
    document.getElementById('count').innerText = count;
});

function control(id) {
    document.getElementById('id').innerText = count;
}; //its common function