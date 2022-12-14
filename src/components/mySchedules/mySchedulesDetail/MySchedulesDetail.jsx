import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Section1,
  Section1Title,
  Section2,
} from '../../community/postList/PostListStyle';
import {
  ContentSection,
  TitieBox,
  Title,
  TimeLineBox,
  TimeBox,
  StartTime,
  EndTime,
  ContentBox,
  Content,
  DeleteBtn,
} from './myShedulesDetailStyle';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { __schedulesDetailGet } from '../../../redux/modules/SchedulesSlice';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const accessToken = localStorage.getItem('authorization');
const refreshToken = localStorage.getItem('refresh-Token');

const MySchedulesDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const view = useSelector((state) => state.ScheduleSlice.detail);

  useEffect(() => {
    dispatch(__schedulesDetailGet(id));
  }, []);

  return (
    <div>
      <Section1>
        <Section2>
          <svg
            width="10"
            height="17"
            viewBox="0 0 10 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              navigate('/mySchedules');
            }}
          >
            <path d="M9 1L2 8.5L9 16" stroke="#1A1F27" />
          </svg>
          <Section1Title>상세일정</Section1Title>
        </Section2>
        <DeleteBtn
          onClick={() => {
            const config = {
              headers: {
                Authorization: accessToken,
                'Refresh-Token': refreshToken,
              },
            };
            axios
              .delete(`https://bkyungkeem.shop/api/calendar/${id}`, config)
              .then(function (response) {
                view.filter((x) => x.id !== response);

              })
              .catch(function (error) {
              })
              .then(function () { });

            Swal.fire({
              title: '일정이 삭제되었습니다',
              showConfirmButton: false,
              timer: 1000,
              customClass: {
                popup: 'allAlret-class',
                title: 'allTitle-class',
              },
            }).then(() => {
              navigate('/mySchedules');
            })
          }}
        >
          삭제
        </DeleteBtn>
      </Section1>

      <ContentSection>
        <TitieBox>
          <Title>{view.title}</Title>
        </TitieBox>

        <TimeLineBox>
          <TimeBox>
            <StartTime>
              시작: {view.startDate} {view.startTime}
            </StartTime>
            <EndTime>
              종료: {view.endDate} {view.endTime}
            </EndTime>
          </TimeBox>
        </TimeLineBox>

        <ContentBox>
          <Content>{view.todo}</Content>
        </ContentBox>
      </ContentSection>
    </div>
  );
};

export default MySchedulesDetail;