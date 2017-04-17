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

function generateRooms()
  {
    var roomList = [];
    roomList.push(generateFirstRoom(roomList));
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
        x: x,
        y: y,
        width: randWidth,
        height: randHeight
      }

    return room;
  };

function generateFirstRoom(roomList)
  {
    //create the room
    var room = createRandRoom();

    //test if it fits in map
    if (testRoomFits(room, roomList))
      {
        return room;
      }
    else
      {
        //if doesnt fit make a new random room
        return(generateFirstRoom(roomList));
      }
  }

function testRoomFits(room, roomList)
  {
    //check to see if room fits inside boundries
    if (room.x + room.width > map.width - 1 || room.y + room.height > map.height - 1)
        {
          return false;
        }
    return true;

    //check if it overlaps any other rooms
    for (var i = 0; i < roomList.length; i++)
      {
        //check if starting coords are inside any other rooms
        //check each corner of new room, to make sure its not
        //inside a current room
        if (room.x <= roomList[i].x + roomList[i].width)
          {
            return false;
          }
        else if (room.x + room.width >= roomList[i].x)
          {
            return false;
          }
        else if (room.y <= roomList[i].y + roomList[i].height)
          {
            return false;
          }
        else if (room.y + room.height >= roomList[i].y)
          {
            return false;
          }
        else
          {
            return true;
          } 
      }
  };