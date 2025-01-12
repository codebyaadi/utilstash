/**
 * Generates a random profile image URL using the DiceBear API.
 *
 * The function selects a random name from a predefined list of profile image names and a random collection from a predefined list of collections.
 * It then constructs a URL for a profile image in SVG format with the chosen name and collection.
 *
 * @returns A string URL pointing to a randomly generated profile image in SVG format.
 *
 * @example
 * ```
 * const imgUrl = getRandomAvatar();
 * console.log(imgUrl); // Example output: "https://api.dicebear.com/6.x/notionists-neutral/svg?seed=Garfield"
 * ```
 */
export const getRandomAvatar = (): string => {
  const profileImgsNameList: string[] = [
    'Garfield',
    'Tinkerbell',
    'Annie',
    'Loki',
    'Cleo',
    'Angel',
    'Bob',
    'Mia',
    'Coco',
    'Gracie',
    'Bear',
    'Bella',
    'Abby',
    'Harley',
    'Cali',
    'Leo',
    'Luna',
    'Jack',
    'Felix',
    'Kiki'
  ]
  const profileImgsCollectionsList: string[] = [
    'notionists-neutral',
    'adventurer-neutral',
    'fun-emoji'
  ]
  const name: string =
    profileImgsNameList[Math.floor(Math.random() * profileImgsNameList.length)]
  const collection: string =
    profileImgsCollectionsList[
      Math.floor(Math.random() * profileImgsCollectionsList.length)
    ]
  return `https://api.dicebear.com/6.x/${collection}/svg?seed=${name}`
}
