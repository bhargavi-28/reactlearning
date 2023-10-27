import { Profile } from "./Profile";

export function Profilemembers() {
  const members = [
    {
      dp: "https://imgix.ranker.com/list_img_v2/18411/518411/original/my-top-10-favorite-anime-characters-u2",
      n: "naruto"
    },
    {
      dp: "https://i.pinimg.com/1200x/3f/f3/84/3ff3847f6487e15456dcf52d2f3dcbfe.jpg",
      n: "itadori yuji"
    },
    {
      dp: "https://m.media-amazon.com/images/I/71azOmQbOYL.jpg",
      n: "luffy "
    }
  ];
  return (
    <div>
      {
        members.map((pic) => (
          <Profile dp={pic.dp}
            name={pic.n} />
        ))
      }</div>
  );

}
