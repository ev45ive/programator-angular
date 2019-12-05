interface Entity {
  id: number;
  name: string;
}

interface Playlist extends Entity {
  favorite: boolean;
  /**
   * Color must be HEX string
   * @example #ff00ff
   */
  color: string;
  tracks?: Track[];
}

interface Track extends Entity {}

const playlist: Playlist = {
  id: 123,
  name: "Test",
  color: "#ff00ff",
  favorite: true
};

// function costamPlaylist(p: Playlist) {
//   p.name;
// }
