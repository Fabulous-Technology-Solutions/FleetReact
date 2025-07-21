import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { FaRegFileAlt, FaLink } from "react-icons/fa";

const InterviewDetails = ({ show, onHide }) => {
  if (!show) return null;
  const [showTranscript, setShowTranscript] = useState(false);

  return (
    <div
      className="fixed inset-0 bg-gray-800/10 backdrop-blur-sm flex items-center justify-center z-1100"
      onClick={onHide}
    >
      <div class="relative p-[1px] w-full max-w-[400px] min-w-[300px] rounded-[12px] bg-gradient-to-br from-[#0058E8] to-[#00318200]">
        <div
          className="bg-[var(--bgcardcontainer)] rounded-[12px] c-primarys shadow-lg p-6 "
          onClick={(e) => e.stopPropagation()}
        >
          <Typography variant="h6" component="h2" className="c-primary">
            Interview Details
          </Typography>

          <Box className="grid grid-cols-2 gap-4 mt-6 max-h-[calc(100vh-300px)] overflow-y-auto">
            <div>
              <div className="c-secondary mb-3">Email</div>
              <div className="c-primary">c.a.glasser@outlook.com</div>
            </div>

            <div>
              <div className="c-secondary mb-3">Phone Number</div>
              <div className="c-primary">(814) 413-9191</div>
            </div>

            <div>
              <div className="c-secondary mb-3">Candidate Name</div>
              <div className="c-primary">John Ellis</div>
            </div>

            <div>
              <div className="c-secondary mb-3">Resume</div>
              <div className="c-primary flex items-center gap-2 text-blue-400 text-sm font-medium cursor-pointer">
                Document <FaRegFileAlt />
              </div>
            </div>

            <div className="col-span-2">
              <div className="c-secondary mb-3">Interview Transcription</div>
              <div
                className="c-primary flex items-center gap-2 text-blue-400 text-sm font-medium cursor-pointer"
                onClick={() => setShowTranscript(!showTranscript)}
              >
                {showTranscript ? "Hide Transcription" : "View Transcription"}{" "}
                <FaLink />
              </div>
              {showTranscript && (
                <div className="mt-3">
                  {Array(5)
                    .fill(0)
                    .map((e, i) => (
                      <div key={i}>
                        <h6 className="font-semibold">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </h6>
                        <small>
                          Aenean quis lobortis ex, ac pulvinar sapien. Cras in
                          neque ac dolor auctor mattis. Mauris et est aliquam,
                          suscipit lacus quis, viverra sapien.
                        </small>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </Box>

          <hr className="w-full border-t border-white/20 mt-6" />

          <Box className="flex gap-3 mt-5 justify-end">
            <button
              className="text-sm font-semibold bg-[#F43F5E] text-white py-2.5 px-4 rounded-[12px] hover:opacity-90"
              onClick={onHide}
            >
              Reject
            </button>
            <button
              className="text-sm font-semibold bg-[#2563EB] text-white py-2.5 px-4 rounded-[12px] hover:opacity-90"
              onClick={onHide}
            >
              Hire
            </button>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default InterviewDetails;
