import { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import { BottomSheetJob, JobBoard } from './BottomSheetStyle';

export default function Bottom() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <select onClick={() => setOpen(true)}>
        <option>직군을 선택해 주세요.</option>
      </select>

      <BottomSheet
        open={open}
        onDismiss={() => {
          setOpen(false);
        }}
      >
        <JobBoard>
          <ul>기획·전략</ul>
          <ul>마케팅·홍보·조사</ul>
          <ul>회계·세무·재무</ul>
          <ul>인사·노무·HRD</ul>
          <ul>총무·법무·사무</ul>
          <ul>IT개발·데이터</ul>
          <ul>디자인</ul>
          <ul>영업·판매·무역</ul>
          <ul>고객상담·TM</ul>
          <ul>구매·자재·물류</ul>
          <ul>상품기획·MD</ul>
          <ul>운전·운송·배송</ul>
          <ul>서비스</ul>
          <ul>생산</ul>
          <ul>건설·건축</ul>
          <ul>의료</ul>
          <ul>연구·R&D</ul>
          <ul>교육</ul>
          <ul>미디어·문화·스포츠</ul>
          <ul>금융·보험</ul>
          <ul>공공·복지</ul>
        </JobBoard>
      </BottomSheet>
    </>
  );
}
