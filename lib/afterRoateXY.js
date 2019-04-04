import angle2rad from './angle2rad';
export default (function (_a) {
    var x = _a.x, y = _a.y, angle = _a.angle, centerX = _a.centerX, centerY = _a.centerY;
    var round = Math.round, PI = Math.PI, cos = Math.cos, sin = Math.sin;
    var rad = angle2rad(angle);
    return {
        x: round(centerX + (x - centerX) * cos(rad) - (y - centerY) * sin(rad)),
        y: round(centerY + (x - centerX) * sin(rad) + (y - centerY) * cos(rad))
    };
});