interface Member {
  id: string;
  number: number;
  name: string;
}

export const getArraySplits = (members: Array<Member>) => {
  if (!members) return null;

  const names: Array<string> = [];
  members.forEach((member) => {
    names.push(member.name);
  });

  return names.join(',');
};
