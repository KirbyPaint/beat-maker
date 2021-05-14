export default class Beat {
  constructor(beat, color, angle, row, col) {
    this.notes = {
      beat: beat,
      color: color,
      angle: angle,
      row: row,
      col: col
    };
  }
}