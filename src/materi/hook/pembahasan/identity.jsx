import { useCallback, useEffect, useState } from 'react';

export const Identity = () => {
  const fetchUser = useCallback(() => ['aldi', 'wasu', 'wawan'], []);
  useEffect(() => {
    const data = fetchUser();
    setUser(data);
  }, [fetchUser]);
  let [user, setUser] = useState([]);
  return (
    <>
      <div>
        <ul>
          {user.map((u) => (
            <li key={u}>{u}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
