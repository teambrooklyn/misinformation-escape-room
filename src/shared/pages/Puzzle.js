import React, { useState, lazy, useEffect, Suspense } from "react";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { mapping, GetCookie, logMetric, setWithExpiry, getWithExpiry } from '@/shared/UtilityFunctions'

const Puzzle = () => {
  const [validRoute, setRoute] = useState(false)
  const [loading, setLoading] = useState(true)

  const { puzzleId } = useParams();
	const level = parseInt(getWithExpiry("level"))
  const id = mapping.get(puzzleId)

  const Component = lazy(() => import(`@/shared/puzzles/puzzle${id}/Puzzle${id}`));

  useEffect(() => {
    if(mapping.has(puzzleId) && parseInt(id) === level) {
      if(getWithExpiry("p"+ id +"start") === null && GetCookie("trackable") === "true") {
        logMetric(mapping.get(puzzleId), "TimeEvent", "start")
        setWithExpiry("p"+ id +"start",true,3600000)
      }
      setRoute(true)
    }
    setLoading(false)
  },[id, level, puzzleId]);

  if(loading) {
    return (
      <h1>Loading Puzzle ...</h1>
    )
  } else if (validRoute) {
    return (
      <Suspense fallback={<h1>Loading Puzzle...</h1>}>
        <Component style={{ position: "absolute", left: 0, top: 0 }} />
      </Suspense>
    )
  } else {
    return (
      <Redirect
        to={{
          pathname: '/puzzles'
        }}
      />
    )
  }
}

export default Puzzle;
