import PlayerSocket, { Message } from './PlayerSocket';
import { DotPoint, PathPoint, PositionType, RotationOption, ScaleOption } from './Interfaces';
declare class HapticPlayer {
    socket: PlayerSocket;
    constructor();
    addListener: (func: (msg: Message) => void) => void;
    turnOff: (position: PositionType) => void;
    turnOffAll: () => void;
    submitDot: (key: string, pos: PositionType, dotPoints: DotPoint[], durationMillis: number) => void;
    submitPath: (key: string, pos: PositionType, pathPoints: PathPoint[], durationMillis: number) => void;
    registerFile: (key: string, json: string) => void;
    submitRegistered: (key: string) => void;
    submitRegisteredWithScaleOption: (key: string, scaleOption: ScaleOption) => void;
    submitRegisteredWithRotationOption: (key: string, rotationOption: RotationOption) => void;
}
export default HapticPlayer;
