import {CoreBindings} from "@loopback/core";
import {RabbitmqConfig} from "./servers";

export namespace RabbitmqBindings {
    export const CONFIG =
        CoreBindings.APPLICATION_CONFIG.deepProperty<RabbitmqConfig>('rabbitmq');
}