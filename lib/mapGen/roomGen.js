var map = 
  {
    width: 500,
    height: 500,
    gridSize: 10
  };

var rooms =
  {
    minSide: 20,
    maxSide: 100
  };

var roomList = [];

function generateRooms()
  {
    roomList = [];
    //create staring room
    roomList.push(generateFirstRoom());

    var prevRoom = roomList[0];
    //create main path
    for (var i = 0; i < 1; i++)
      {
        roomList.push( generateNextRoom(roomList[0+i]) );
      }

    return roomList;
  };

function createRandRoom()
  {

    //random x starting coord
    var x = Math.round(Math.random() * (map.width) / map.gridSize) * map.gridSize;
    //random y starting coord
    var y = Math.round(Math.random() * (map.height) / map.gridSize) * map.gridSize;
    //random width of room
    var randWidth = Math.round((Math.random() * (rooms.maxSide - rooms.minSide) + rooms.minSide) / map.gridSize) * map.gridSize;
    //random height of room
    var randHeight = Math.round((Math.random() * (rooms.maxSide - rooms.minSide) + rooms.minSide) / map.gridSize) * map.gridSize;

    var room = 
      {
        x1: x,
        y1: y,
        x2: x + randWidth,
        y2: y + randHeight
      }

    return room;
  };

function generateFirstRoom()
  {
    //create the room
    var room = createRandRoom();

    //test if it fits in map
    if (testRoomFits(room))
      {
        return room;
      }
    else
      {
        //if doesnt fit make a new random room
        return(generateFirstRoom());
      }
  };

function generateNextRoom(prevRoom)
  {
    return(generateFirstRoom());
  };

function testRoomFits(room)
  {
    //check to see if room fits inside boundries
    if (room.x2 > map.width || room.y2 > map.height)
        {
          return false;
        }

    //check if it overlaps any other rooms
    for (var i = 0; i < roomList.length; i++)
      {
        if(room.x1 <= roomList[i].x2 && room.x2 >= roomList[i].x1 && room.y1 <= roomList[i].y2 && room.y2 >= roomList[i].y1)
          {
            return false;
          }
      }
    return true
  };