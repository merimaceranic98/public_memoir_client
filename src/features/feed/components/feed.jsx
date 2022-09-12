import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllMemoirs } from "../../memoirs/actions/memoirs-actions";
import Memoirs from "../../memoirs/components/memoirs";
import NewMemoir from "../../memoirs/components/newMemoir";

const Feed = () => {
  const dispatch = useDispatch();
  const memoirs = useSelector((state) => state.memoirs.memoirs);

  useEffect(() => {
    dispatch(getAllMemoirs());
  }, [dispatch]);

  return (
    <>
      <NewMemoir />
      <Memoirs memoirs={memoirs} />
    </>
  );
};

export default Feed;
