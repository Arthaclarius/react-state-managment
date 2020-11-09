import faker from "faker";
import { IChat, IMessage, IUser } from "~types";

export const getUserQuery = () =>
  new Promise<IUser | undefined>((resolve, reject) => {
    try {
      const friends: IUser[] = new Array(10).fill(undefined).map(() => ({
        id: faker.random.uuid(),
        nickname: faker.internet.userName(),
        avatar: faker.internet.avatar(),
        color: faker.internet.color(),
        email: faker.internet.email(),
      }));

      const user: IUser = {
        id: faker.random.uuid(),
        nickname: faker.internet.userName(),
        avatar: faker.internet.avatar(),
        color: faker.internet.color(),
        email: faker.internet.email(),
        friends: friends,
      };

      const chats: IChat[] = friends.map((f) => ({
        id: faker.random.uuid(),
        name: "",
        users: [{ ...user, friends: undefined, chats: undefined }, f],
        messages: new Array(
          Number.parseInt(faker.random.number({ min: 1, max: 50 }).toFixed(0))
        )
          .fill(undefined)
          .map<IMessage>(() => ({
            id: faker.random.uuid(),
            user: faker.random.boolean()
              ? { ...user, friends: undefined, chats: undefined }
              : f,
            text: faker.lorem.sentence(),
            date: faker.date.recent().valueOf(),
            media: faker.random.boolean()
              ? faker.image.animals(100, 100)
              : undefined,
          })),
      }));

      user.chats = chats;

      resolve(user);
    } catch (error) {
      reject(undefined);
    }
  });
