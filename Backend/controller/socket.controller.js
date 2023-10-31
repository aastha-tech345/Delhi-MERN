//var socketio = require('socket.io');
const fs = require('fs');
//const WebSocket = require('ws');
//var userObj = mongoose.model('users');
var socketConnection = exports = module.exports = {};
var activeDashboards = [];
var activeWSDashboards = [];
socketConnection.listen = function listen(app) {
    //io = socketio.listen(app);
    io = require('socket.io')(app, {
        //parser: require("socket.io-msgpack-parser"),
        cors: {
            allowedHeaders: ["*"]
        }
    });
    /*const wss = new WebSocket.Server({ port: 4043 });
    var wsregisteredDashboards = [];
    wss.on('connection', function connection(ws) {

        var ws_each_page;
        wss.on('ws_register_dashboard', function (data) {
            var series_socket_key = data.page_slug;
            ws_each_page = series_socket_key;
            wsregisteredDashboards[ws_each_page] = ws;
            wsregisteredDashboards[ws_each_page].page_slug = data.page_slug;

            let existRowrec = activeWSDashboards.filter(function (obj) {
                return obj[ws_each_page].page_slug === ws_each_page;
            });
            if (!existRowrec.length) {
                activeWSDashboards.push(wsregisteredDashboards);
            }
            console.log('activeWSDashboards', activeWSDashboards);
        });

        ws.on('message', function incoming(message) {
            console.log('received: %s', message);
        });
        ws.send('something');
    });*/
    /*io.attach(app, {
        allowUpgrades: true,
        pingInterval: 25000,
        pingTimeout: 60000,
        upgradeTimeout: 50000,
        cookie: false
    });*/
    exports.sockets = io.sockets;
    global.socketIO = io.sockets;

    var loggedusers = [];
    var registeredDashboards = [];
    io.sockets.on('connection', function (socket) {
        //console.log('socket connected');

        setInterval(() => {
            socket.emit('serverTimeFeed', new Date());
        }, 5000);

        socket.on('acknowledgeData', function (data) {
            //console.log('acknowledgeData', data);
        })
        //console.log("user-agent: " + socket.request.headers['user-agent']);
        var each_page;
        //registring series tag
        socket.on('register_dashboard', function (data) {
            var series_socket_key = data.page_slug + '_' + socket.id;
            //console.log('register_dashboard --', series_socket_key);

            each_page = series_socket_key;
            socket.join(each_page);
            registeredDashboards[each_page] = {};
            registeredDashboards[each_page].page_slug = data.page_slug;

            if (!activeDashboards.includes(each_page)) {
                activeDashboards.push(each_page);
            }

        });

        // Unregistring series tag
        socket.on('unregister_dashboard', function (datareq) {

            var series_socket_key = datareq.page_slug + '_' + socket.id;
            // console.log('unregister_dashboard --', series_socket_key);
            var page_slug = series_socket_key;
            if (page_slug !== "" && page_slug != null) {
                if (registeredDashboards[page_slug]) {
                    delete registeredDashboards[page_slug];
                }
            }
            activeDashboards = activeDashboards.filter(function (obj) {
                return obj !== series_socket_key;
            });
            //activeDashboards = registeredDashboards;
        });

        var eachuser;
        socket.on('registersocket', function (data) {
            //console.log('registersocket login --', data.user_id)
            eachuser = data.user_id;
            socket.join(data.user_id);
            if (data.email) {
                //console.log('join email...', data.email)
                socket.join(data.email);
            }
            loggedusers[eachuser] = {};
            loggedusers[eachuser].userId = data.user_id;
            var updateval = {};
            updateval.lastLoggedIn = new Date();
            updateval.currentlyActive = 1;
            updateval.socket_id = socket.id;
            if (loggedusers[eachuser] && loggedusers[eachuser].userId != null) {
            }
            global.onlineUser = loggedusers;
        });

        // Un- register to socket
        socket.on('unRegistersocket', function (userData) {
            var loggedOutUserId = userData.user_id;
            //console.log('registersocket logout --', loggedOutUserId)
            if (loggedOutUserId !== "" && loggedOutUserId != null) {
                delete loggedusers[eachuser];
            }
            global.onlineUser = loggedusers;
        });

        socket.on('fetchTempProductStats', function () {
            //OnDesktopNotifyRequest({ userId: data.user_id });
        });

        //console.log('loggedusers---', global.onlineUser);

        //Desktop notification for Session request/accept/reschedule/cancel/wallet etc
        socket.on('sendDesktopNotifyRequest', function (data) {
            //OnDesktopNotifyRequest({ userId: data.user_id });
        });

        //When browser closed
        socket.on('disconnect', function () {
            //console.log('socket disconnected');
            userleft();
            seriesleft();
        });

        socket.on('sendDeclineSessionNotify', function (data) {
            //OnDeclineNotify(data);
        });

        var userleft = function () {
            if (loggedusers[eachuser] && loggedusers[eachuser].userId != null) {
                delete loggedusers[eachuser];
            }
            global.onlineUser = loggedusers;
        };
        var seriesleft = function () {
            if (registeredDashboards[each_page] && registeredDashboards[each_page].page_slug != null) {
                delete registeredDashboards[each_page];
            }
            activeDashboards = activeDashboards.filter(function (obj) {
                return obj !== each_page;
            });
            //activeDashboards = registeredDashboards;
        };
        global.onlineUser = loggedusers;
        //activeDashboards = registeredDashboards;
    });
    return io;
};


//For User online/offline
function sendUserCurrentStatus(uID, status) {
    //socketConnection.socketUserRecentActive(uID, status);
}
socketConnection.feedPageDashboard = function feedPageDashboard(feedData, reventname = '') {
    if (!reventname) {
        reventname = 'pageFeed';
    }
    var buf = Buffer.from(JSON.stringify(feedData), 'utf-8');
    activeDashboards.forEach(eachpage => {
        global.socketIO.to(eachpage).emit(reventname, { "data": buf });
    });
};

socketConnection.summaryStatusAction = function summaryStatusAction(feedData, reventname = '') {
    global.socketIO.emit(reventname, { "data": feedData });
};

socketConnection.dmmActionTrigger = function dmmActionTrigger(feedData, email = '', reventname = '') {
    global.socketIO.to(email).emit(reventname, { "data": feedData });
};

socketConnection.socketUserRecentActive = function socketUserRecentActive(userID, status) {
    //global.socketIO.emit('userCurrentStatus', { "data": userID });
};
socketConnection.socketsendProductStats = function socketsendProductStats(databobj) {
    global.socketIO.emit('productCurrentStats', { "data": databobj });
};