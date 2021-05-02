var container = document.getElementById('container');
var colors = ['04009a', 'ff8474', 'cf0000', "f21170", "ffdf6b", "f5cebe", "126e82", "ffcc29"]
var squares = 500;
for(var i =0; i < squares; i++) {
    var square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener("mouseover", (e) => {
        var color = colors[Math.floor(Math.random() * colors.length)];
        e.target.style.backgroundColor = `#${color}`
        e.target.style.boxShadow = `0 0 2px #${color}, 0 0 10px #${color}`
    })
     square.addEventListener("touchmove", (e) => {
        var color = colors[Math.floor(Math.random() * colors.length)];
        e.target.style.backgroundColor = `#${color}`
        e.target.style.boxShadow = `0 0 2px #${color}, 0 0 10px #${color}`
    })
    square.addEventListener('mouseleave', (e) => {
        
            e.target.style.backgroundColor = "#1d1d1d";
            e.target.style.boxShadow = '0 0 1px #fff';
    })
    square.addEventListener('touchend', (e) => {
        
            e.target.style.backgroundColor = "#1d1d1d";
            e.target.style.boxShadow = '0 0 1px #fff';
    })
    container.appendChild(square);
}
