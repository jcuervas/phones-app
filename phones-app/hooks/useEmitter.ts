import {TinyEmitter} from "tiny-emitter";

export type EventType = 'onSearch'

const eventEmitter: TinyEmitter = new TinyEmitter()

export default function useEmitter () {

  return {
    onEvent (event: EventType, handler: (payload?: any) => void | Promise<void>) {
      eventEmitter.on(event, handler)
    },
    emitEvent (event: EventType, payload?: any) {
      eventEmitter.emit(event, payload)
    }
  }
}
