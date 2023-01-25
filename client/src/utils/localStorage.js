export const getSavedGroupIds = () => {
  const savedGroupIds = localStorage.getItem('saved_group')
    ? JSON.parse(localStorage.getItem('saved_group'))
    : [];

  return savedGroupIds;
};

export const saveBookIds = (groupIdArr) => {
  if (groupIdArr.length) {
    localStorage.setItem('saved_group', JSON.stringify(groupIdArr));
  } else {
    localStorage.removeItem('saved_group');
  }
};

export const deleteGroupId = (groupId) => {
  const savedGroupIds = localStorage.getItem('saved_group')
    ? JSON.parse(localStorage.getItem('saved_group'))
    : null;

  if (!savedGroupIds) {
    return false;
  }

  const updatedSavedGroupIds = savedGroupIds?.filter((savedGroupId) => savedGroupId !== groupId);
  localStorage.setItem('saved_group', JSON.stringify(updatedSavedGroupIds));

  return true;
};
