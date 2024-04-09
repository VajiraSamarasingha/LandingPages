import React from "react";
import { Text, Img } from "./..";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
} from "react-accessible-accordion";

export default function C1440pxFaqs({
  whatiswebflow = "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
  description = "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
  ...props
}) {
  return (
    <div {...props}>
      <AccordionItemHeading className="w-full">
        <AccordionItemButton>
          <AccordionItemState>
            {(props) => (
              <>
                <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
                  <Text size="lg" as="p" className="self-end !text-deep_purple-500">
                    {whatiswebflow}
                  </Text>
                  <Img src="images/img_user.svg" alt="user_one" className="h-[28px] self-start md:w-full" />
                </div>
              </>
            )}
          </AccordionItemState>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <div className="self-stretch">
          <Text size="md" as="p" className="leading-[30px] !text-blue_gray-500">
            {description}
          </Text>
        </div>
      </AccordionItemPanel>
    </div>
  );
}
