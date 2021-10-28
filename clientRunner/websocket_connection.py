import asyncio
import websockets

import controller

# create handler for each connection
async def handler(websocket, path):
    while True:
        data = await websocket.recv()
        controller.press(data)
        print(data);
        await websocket.send('reply')

def start_server_ws():
    print('ws connecting')
    start_server = websockets.serve(handler, "192.168.0.105", 1234)

    asyncio.get_event_loop().run_until_complete(start_server)
    asyncio.get_event_loop().run_forever()