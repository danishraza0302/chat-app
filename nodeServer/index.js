//its is node server which handel socket io conn...

const io =require('socket.io')(8000)

const users = {};

io.on('connection',socket =>{
    socket.on('new-user-joined',name =>{
        console.log("new-user-joined",names);
        users[socket.id]=name;
        socket.broadcast.emit('user-joined', names);
    })
    socket.on('send',mesg =>{
        socket.broadcast.emit('receive',{
            mesg: mesg, names: users[socket.id]})
    });
})