function findArrayModifications(originalArray, updatedArray) 
{
    const newElements = [];
    
    for (let i = 0; i < updatedArray.length; i++) 
    {
      if (!originalArray.includes(updatedArray[i])) 
      {
        newElements.push(updatedArray[i]);
      }
    }
  
    const removedElements = [];
  
    for (let i = 0; i < originalArray.length; i++) {
      if (!updatedArray.includes(originalArray[i])) {
        removedElements.push(originalArray[i]);
      }
    }
  
    return [newElements, removedElements];
  }
  