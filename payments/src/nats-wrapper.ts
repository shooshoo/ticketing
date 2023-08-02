import nats, { Stan } from "node-nats-streaming";

class NatsWrapper {
  //Stan is the NATS client!
  // by "?" we tell typescript that this might not be initiated for a while
  private _client?: Stan;

  // get keyword is typescript for getter
  get client() {
    if (!this._client) {
      throw new Error("Cannot access NATS client before connect!");
    }
    return this._client;
  }
  //we can find clusterId and url in our nats-depl.yaml file
  // clusterId is under "Cid" in args section
  // url is in service section with combination http://<service name>:<port>
  connect(clusterId: string, clientId: string, url: string) {
    this._client = nats.connect(clusterId, clientId, { url });

    return new Promise<void>((resolve, reject) => {
      this.client.on("connect", () => {
        console.log("Connected to NATS");
        resolve();
      });
      this.client.on("error", (err) => {
        reject(err);
      });
    });
  }
}
// somehow this will make it singleton!
// apparently all Nodejs modules are singleton and refered to one file in memory
// this means that there will be only one instance and that would be natsWrapper
// by importing this in different files, it does not mean
// that it will call new NatsWrapper() each time!
export const natsWrapper = new NatsWrapper();
