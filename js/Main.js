const box = document.getElementById('resizableBox');
const handles = document.querySelectorAll('.border-handle');

let isResizing = false;
let currentHandle = null;

handles.forEach(handle => {
  handle.addEventListener('mousedown', (e) => {
    isResizing = true;
    currentHandle = handle;
    document.body.style.cursor = handle.style.cursor;
  });
});

document.addEventListener('mousemove', (e) => {
  if (!isResizing) return;

  const boxRect = box.getBoundingClientRect();

  if (currentHandle.classList.contains('top')) {
    const newHeight = boxRect.bottom - e.clientY;
    if (newHeight > 50) {
      box.style.height = `${newHeight}px`;
      box.style.top = `${e.clientY}px`;
    }
  }

  if (currentHandle.classList.contains('right')) {
    const newWidth = e.clientX - boxRect.left;
    if (newWidth > 50) {
      box.style.width = `${newWidth}px`;
    }
  }

  if (currentHandle.classList.contains('bottom')) {
    const newHeight = e.clientY - boxRect.top;
    if (newHeight > 50) {
      box.style.height = `${newHeight}px`;
    }
  }

  if (currentHandle.classList.contains('left')) {
    const newWidth = boxRect.right - e.clientX;
    if (newWidth > 50) {
      box.style.width = `${newWidth}px`;
      box.style.left = `${e.clientX}px`;
    }
  }
});

document.addEventListener('mouseup', () => {
  isResizing = false;
  document.body.style.cursor = 'default';
});




// ***************
$(document).ready(function(){
    $("#note").click(function(){
      $("#resizableBox").toggle();
    });
  });

  $(document).ready(function(){
    $("#exitmen").click(function(){
      $("#resizableBox").toggle();
    });
  });

  $(document).ready(function(){
    $("#filesfolder").click(function(){
      $("#uniqueResizableBox").toggle();
    });
  });

//   **************************************
$(document).ready(function () {
    let isResizing = false;
    let currentHandle = null;
  
    $('.resize-handle').on('mousedown', function (e) {
      isResizing = true;
      currentHandle = $(this);
      $('body').css('cursor', currentHandle.css('cursor'));
    });
  
    $(document).on('mousemove', function (e) {
      if (!isResizing || !currentHandle) return;
  
      const box = $('#uniqueResizableBox');
      const boxOffset = box.offset();
      const boxWidth = box.outerWidth();
      const boxHeight = box.outerHeight();
  
      if (currentHandle.hasClass('unique-handle-top')) {
        const newHeight = boxOffset.top + boxHeight - e.clientY;
        if (newHeight > 50) {
          box.height(newHeight);
          box.css('top', e.clientY);
        }
      }
  
      if (currentHandle.hasClass('unique-handle-right')) {
        const newWidth = e.clientX - boxOffset.left;
        if (newWidth > 50) {
          box.width(newWidth);
        }
      }
  
      if (currentHandle.hasClass('unique-handle-bottom')) {
        const newHeight = e.clientY - boxOffset.top;
        if (newHeight > 50) {
          box.height(newHeight);
        }
      }
  
      if (currentHandle.hasClass('unique-handle-left')) {
        const newWidth = boxOffset.left + boxWidth - e.clientX;
        if (newWidth > 50) {
          box.width(newWidth);
          box.css('left', e.clientX);
        }
      }
    });
  
    $(document).on('mouseup', function () {
      isResizing = false;
      currentHandle = null;
      $('body').css('cursor', 'default');
    });
  });
  
//   **************
