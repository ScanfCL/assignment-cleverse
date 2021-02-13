import React, { useState } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import { Input } from "../../../components/Input";
import { Select } from "../../../components/Select";
import { Checkbox } from "../../../components/CheckBox";
import { OutlineButton } from "../../../components/Button";
import { useHome, useStore } from "../../../pages";

const optionsType = ["shop", "otop", "food"];

const initialFormState = {
  name: "",
  imageUrl: "",
  category: "",
  location: "",
  type: "",
  joinedProject: [],
};

export const AddShop = observer(styled(({ className }) => {
  const { addShop } = useStore();
  const [formState, setFormState] = useState(initialFormState);

  const handleChangeForm = (name, value) => {
    setFormState((oldState) => ({ ...oldState, [name]: value }));
  };

  const handleChangeCheckBoxForm = (name, value) => {
    setFormState((oldState) =>
      !oldState[name].includes(value)
        ? {
            ...oldState,
            [name]: [...oldState[name], value],
          }
        : {
            ...oldState,
            [name]: [...oldState[name].filter((item) => item !== value)],
          }
    );
  };

  return (
    <div className={className}>
      <div className="add-shop-title">เพิ่มร้าน (ใช้ mobx)</div>
      <Input
        label="ชื่อร้าน"
        value={formState.name}
        onChange={(value) => handleChangeForm("name", value)}
      />
      <Input
        label="ประเภทร้าน"
        value={formState.category}
        onChange={(value) => handleChangeForm("category", value)}
      />
      <Input
        label="พื้นที่"
        value={formState.location}
        onChange={(value) => handleChangeForm("location", value)}
      />
      <Input
        label="Image Url (optional)"
        value={formState.imageUrl}
        onChange={(value) => handleChangeForm("imageUrl", value)}
      />
      <Select
        label="ประเภท"
        value={formState.type}
        options={optionsType}
        placeholder="กรุณาเลือกประเภท"
        onChange={(value) => handleChangeForm("type", value)}
      />
      <div className="label">โครงการที่เข้าร่วม</div>
      <Checkbox
        name="คนละครึ่ง"
        label="คนละครึ่ง"
        value="halfhalf"
        checked={formState.joinedProject.includes("halfhalf")}
        onChange={(e) =>
          handleChangeCheckBoxForm("joinedProject", e.target.value)
        }
      />
      <Checkbox
        name="เราชนะ"
        label="เราชนะ"
        value="wewin"
        checked={formState.joinedProject.includes("wewin")}
        onChange={(e) =>
          handleChangeCheckBoxForm("joinedProject", e.target.value)
        }
      />
      <Checkbox
        name="ร้านธงฟ้า"
        label="ร้านธงฟ้า"
        value="thongfah"
        checked={formState.joinedProject.includes("thongfah")}
        onChange={(e) =>
          handleChangeCheckBoxForm("joinedProject", e.target.value)
        }
      />
      <OutlineButton
        text="เพิ่ม"
        onClick={() => {
          addShop(formState);
          setFormState(initialFormState);
        }}
      />
    </div>
  );
})`
  margin-top: 20px;
  border: 1px solid #e2e8f0;
  padding: 16px;
  max-width: 350px;
  margin-right: 2rem;
  background: white;

  > .add-shop-title {
    font-size: 16px;
    font-weight: bold;
  }

  > .label {
    font-size: 14px;
    margin-top: 10px;
    font-weight: bold;
  }

  > ${OutlineButton} {
    margin-top: 20px;
  }
`);
