import { onMounted, onUnmounted } from "vue";
import { EventHub } from "./eventHub";

/**
 * Listen to event hub event
 * Automatically unsubscribe on unmount
 * @param event
 * @param callback
 */
export function useEventHub(event: string, callback: (...args: any[]) => void) {
    onMounted(() => EventHub.on(event, callback));
    onUnmounted(() => EventHub.off(event, callback));
}
