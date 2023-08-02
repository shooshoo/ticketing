export const natsWrapper = {
  client: {
    // using jest.fn().mockImplementation() now we can have
    // access some data and statics on this mocked function and write some tests.
    // like if it is called, how many times it is called, ...
    publish: jest
      .fn()
      .mockImplementation(
        (subject: string, data: string, callback: () => void) => {
          callback();
        }
      ),
  },
};
