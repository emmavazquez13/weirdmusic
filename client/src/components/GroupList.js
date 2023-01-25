import React from 'react';

const GroupList = ({ groups, title }) => {
  if (!groups.length) {
    return <h3>No Groups Yet</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {groups &&
          groups.map((group) => (
            <div key={group._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {group.name} <br />
                </h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GroupList;