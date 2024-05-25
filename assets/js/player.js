const data = {
  playlists: [
    {
      playlistInfo: {
        id: "1-0",
        title: "Hip-Hop Hits",
        coverImgUrl: "./assets/images/cardImage/image1.jpeg",
        tracksCount: 4,
      },
      tracks: [
        {
          trackId: 1,
          artistName: "Eminem",
          trackTitle: "Rap God",
          isHot: true,
          trackFileUrl: "./assets/audio/Eminem - Rap God.mp3",
          trackCoverImgUrl: "./assets/images/cardImage/trackList/track1.jpeg",
        },
        {
          trackId: 2,
          artistName: "50 cent",
          trackTitle: "In da Club",
          isHot: false,
          trackFileUrl: "./assets/audio/50cent%20-%20In%20da%20club.mp3",
          trackCoverImgUrl: "./assets/images/cardImage/trackList/track2.jpeg",
        },
        {
          trackId: 3,
          artistName: "DMX",
          trackTitle: "X Gon' Give It To Ya",
          isHot: true,
          trackFileUrl: "./assets/audio/DMX%20-%20X%20Gon'%20Give%20It%20To%20Ya.mp3",
          trackCoverImgUrl: "./assets/images/cardImage/trackList/track3.jpeg",
        },
        {
          trackId: 4,
          artistName: "Eminem feat 50 Cent, Cashis, Lloyd Banks",
          trackTitle: "You Don't Know",
          isHot: true,
          trackFileUrl: "./assets/audio/Eminem%20-%20You%20Don't%20Know%20(feat.%2050%20cent,%20Lloyd%20Banks%20and%20Cashis).mp3",
          trackCoverImgUrl: "./assets/images/cardImage/trackList/track4.jpeg",
        },
      ],
    },
    {
      playlistInfo: {
        id: "1-1",
        title: "Rap Hits 1990s",
        coverImgUrl: "./assets/images/cardImage/image2.jpeg",
        tracksCount: 4,
      },
      tracks: [
        {
          trackId: 5,
          artistName: "Public Enemy",
          trackTitle: "Fight the Power",
          isHot: true,
          trackFileUrl: "./assets/audio/Public%20Enemy%20-%20Fight%20The%20Power.mp3",
          trackCoverImgUrl: "./assets/images/cardImage/trackList/track5.jpeg",
        },
        {
          trackId: 6,
          artistName: "Vanila Ice",
          trackTitle: "Ice Ice Baby",
          isHot: false,
          trackFileUrl: "./assets/audio/Vanila%20Ice%20-%20Ice%20Baby.mp3",
          trackCoverImgUrl: "./assets/images/cardImage/trackList/track6.jpeg",
        },
        {
          trackId: 7,
          artistName: "MC Hammer",
          trackTitle: "You Can’t Touch This",
          isHot: true,
          trackFileUrl: "./assets/audio/Mc%20Hammer%20-%20You%20Can't%20Touch%20This.mp3",
          trackCoverImgUrl: "./assets/images/cardImage/trackList/track7.jpeg",
        },
        {
          trackId: 8,
          artistName: "Brand Nubian",
          trackTitle: "Brand Nubian",
          isHot: true,
          trackFileUrl: "./assets/audio/Brand%20Nubian%20-%20Brand%20Nubian.mp3",
          trackCoverImgUrl: "./assets/images/cardImage/trackList/track8.jpeg",
        },
      ],
    },
  ],
};

function Header() {
  const header = document.createElement("header");

  const headerContainer = document.createElement("div");
  headerContainer.classList.add("header-container");

  const img = document.createElement("img");
  img.src = "./assets/images/logo/logo.svg";
  img.setAttribute("alt", "logo");

  const logo = document.createElement("div");
  logo.classList.add("logo-name");
  logo.innerText = "InPlayer";

  headerContainer.append(img, logo);
  header.append(headerContainer);

  return header;
}

function AddPlaylistPanel() {
  const container = document.createElement("div");
  container.classList.add("add-playlist-panel");

  const appHeader = document.createElement("h1");
  appHeader.classList.add("title");
  appHeader.innerText = "My playlists";

  const addButton = document.createElement("button");
  addButton.classList.add("button");
  addButton.innerText = "Add Playlist";

  container.append(appHeader, addButton);

  return container;
}

function ButtonsEditDelete() {
  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("buttons-container");

  const editBtn = document.createElement("button");

  const editBtnImg = document.createElement("img");
  editBtnImg.classList.add("button-icon");
  editBtnImg.src = "./assets/images/icons/edit.svg";
  editBtnImg.setAttribute("alt", "edit");

  editBtn.append(editBtnImg);

  const delBtn = document.createElement("button");

  const delBtnImg = document.createElement("img");
  delBtnImg.classList.add("button-icon");
  delBtnImg.src = "./assets/images/icons/basket.svg";
  delBtnImg.setAttribute("alt", "delete");

  delBtn.append(delBtnImg);

  buttonsContainer.append(editBtn, delBtn);

  return buttonsContainer;
}

function PlaylistInfo(playlistInfo) {
  const container = document.createElement("div");
  container.classList.add("playlist-info");

  const img = document.createElement("img");
  img.classList.add("playlist-cover-image");
  img.src = playlistInfo.coverImgUrl;
  img.setAttribute("alt", "cover");

  const wrapper = document.createElement("div");

  const title = document.createElement("h2");
  title.classList.add("title");
  title.innerText = playlistInfo.title;

  const tracksCount = document.createElement("div");
  tracksCount.classList.add("tracks-count");
  tracksCount.innerText = `${playlistInfo.tracksCount} tracks`;

  wrapper.append(title, tracksCount);
  container.append(img, wrapper, ButtonsEditDelete());

  return container;
}

function AddTrackPanel() {
  const container = document.createElement("div");
  container.classList.add("add-track-panel");

  const title = document.createElement("h3");
  title.classList.add("tracklist-title");
  title.innerText = "Tracks";

  const addTrackButton = document.createElement("button");
  addTrackButton.classList.add("button-add-track");

  const addTrackButtonImg = document.createElement("img");
  addTrackButtonImg.src = "./assets/images/icons/add.svg";
  addTrackButtonImg.setAttribute("alt", "add");

  addTrackButton.append(addTrackButtonImg, "Add Track");
  container.append(title, addTrackButton);

  return container;
}

function TrackTopLine(track) {
  const container = document.createElement("div");
  container.classList.add("track-top-line");

  if (track.isHot) {
    const trackHotImg = document.createElement("img");
    trackHotImg.classList.add("track-status");
    trackHotImg.src = "./assets/images/icons/hot.svg";
    trackHotImg.setAttribute("alt", "hot");

    container.append(trackHotImg);
  }

  const trackInfo = document.createElement("div");
  trackInfo.classList.add("track-info");

  const trackName = document.createElement("div");
  trackName.classList.add("track-name");
  trackName.innerText = `${track.artistName} - ${track.trackTitle}`;

  trackInfo.append(trackName, ButtonsEditDelete());
  container.append(trackInfo);

  return container;
}

function TrackDetails(track) {
  const container = document.createElement("div");
  container.classList.add("track-details");

  const audio = document.createElement("audio");
  audio.controls = true;
  audio.src = track.trackFileUrl;

  container.append(TrackTopLine(track), audio);

  return container;
}

function Track(track) {
  const container = document.createElement("li");
  container.classList.add("track-element");

  const trackCoverImg = document.createElement("img");
  trackCoverImg.classList.add("track-cover-image");
  trackCoverImg.src = track.trackCoverImgUrl;
  trackCoverImg.setAttribute("alt", "track-cover");

  container.append(trackCoverImg, TrackDetails(track));

  return container;
}

function List(tracks) {
  const container = document.createElement("ul");
  container.classList.add("list");

  for (let i = 0; i < tracks.length; i++) {
    container.append(Track(tracks[i]));
  }

  return container;
}

function TrackList(tracks) {
  const container = document.createElement("div");
  container.classList.add("tracklist");

  container.append(AddTrackPanel(), List(tracks));

  return container;
}

function Playlist(playlist) {
  const container = document.createElement("article");
  container.classList.add("playlist");

  container.append(PlaylistInfo(playlist.playlistInfo), TrackList(playlist.tracks));

  return container;
}

function Playlists() {
  const container = document.createElement("div");
  container.classList.add("playlists");

  for (let i = 0; i < data.playlists.length; i++) {
    container.append(Playlist(data.playlists[i]));
  }

  return container;
}

function Main() {
  const container = document.createElement("main");

  container.append(AddPlaylistPanel(), Playlists());

  return container;
}

function App() {
  const container = document.createElement("div");
  container.classList.add("App");

  container.append(Header(), Main());

  return container;
}

const root = document.getElementById("root");

root.append(App());
