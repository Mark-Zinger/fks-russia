import styled from "styled-components";
import { motion } from "framer-motion";

export const PageContainer = styled(motion.div)`
  position: relative;
  min-height: 100vh;
  $root: &;
  transition: background .3 ease;
`
export const Title = styled.div`
  position: fixed;
  z-index: 2;
  top: 42%; left: 50%;
  transform: translateX(-50%);
  font-size: 160px;
  font-weight: 700;
  opacity: 0.17;
  text-transform: uppercase;
  user-select: none;
  pointer-events: none;
  color: white;

`

export const Body = styled.div`
  position: relative;
  padding-top: 95px;
  max-width: 896px;
  margin: 0 auto;

  .index_page & {
    padding-top: 0;
    max-width: unset;
  }
`
