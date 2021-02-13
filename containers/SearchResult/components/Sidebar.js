import React from "react";
import styled from "styled-components";

import { Checkbox } from "../../../components/CheckBox";
import { Radio } from "../../../components/Radio";
import { Select } from "../../../components/Select";
import { Input } from "../../../components/Input";
import { OutlineButton } from "../../../components/Button";

const Sidebar = ({ className }) => {
  return (
    <div className={className}>
      <div className="topic">ค้นหาจากโครงการ</div>
      <Checkbox name="checkbox1" label="คนละครึ่ง" />
      <Checkbox name="checkbox2" label="เราชนะ" />
      <div className="topic">ประเภทร้านค้า</div>
      <Radio name="radio1" label="ทั้งหมด" />
      <Radio name="radio1" label="ร้านอาหารและเครื่องดื่ม" />
      <Radio name="radio1" label="ร้านค้่า OTOP" />
      <Radio name="radio1" label="ร้านธงฟ้า" />
      <Radio name="radio1" label="สินค้าทั่วไป" />
      <Radio name="radio1" label="โรงแรม/ที่พัก" />
      <Radio name="radio1" label="สุขภาพ/ความงาม" />
      <Radio name="radio1" label="ขนส่งสาธารณะ" />
      <Radio name="radio1" label="รับเหมา/งานช่าง/ทำความสะอาด" />
      <Radio name="radio1" label="สุขภาพ/การแพทย์" />
      <div className="topic">จังหวัด/ใกล้ฉัน</div>
      <Select placeholder="พื้นที่ใกล้ฉัน" />
      <div className="topic">ช่วงราคาสินค้า (บาท)</div>
      <div className="wrapper-price-range">
        <Input type="number" /> - <Input type="number" />
      </div>
      <OutlineButton text="ตกลง" />
    </div>
  );
};

const StyledSidebar = styled(Sidebar)`
  border: 1px solid #e2e8f0;
  padding: 16px;
  max-width: 350px;
  margin-right: 2rem;
  height: fit-content;
  background: white;
  
  > .topic {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  > .topic:not(:first-child) {
    margin-top: 32px;
  }

  > .wrapper-price-range {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  > ${OutlineButton} {
    margin-top: 10px;
  }
`;

export { StyledSidebar as Sidebar };
