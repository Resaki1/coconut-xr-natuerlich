import React from "react";
import { ColorRepresentation, Event, Vector3 } from "three";
import { XIntersection } from "@coconut-xr/xinteraction";
import { ThreeEvent } from "@react-three/fiber";
export type ControllerType = "pointer" | "grab" | "teleport";
/**
 * default controllers of either type "pointer", "grab", or "teleport"
 */
export declare function Controllers({ type, ...props }: {
    type?: ControllerType;
    onTeleport?: (point: Vector3) => void;
    filterIntersections?: (intersections: XIntersection[]) => XIntersection[];
    cursorColor?: ColorRepresentation;
    cursorPressColor?: ColorRepresentation;
    cursorOpacity?: number;
    cursorSize?: number;
    cursorVisible?: boolean;
    rayColor?: ColorRepresentation;
    rayPressColor?: ColorRepresentation;
    raySize?: number;
    onPointerDownMissed?: ((event: ThreeEvent<Event>) => void) | undefined;
    onPointerUpMissed?: ((event: ThreeEvent<Event>) => void) | undefined;
    onClickMissed?: ((event: ThreeEvent<Event>) => void) | undefined;
    pressSoundUrl?: string;
    pressSoundVolume?: number;
}): React.JSX.Element;
